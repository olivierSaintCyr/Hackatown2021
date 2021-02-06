import tensorflow as tf
import tensorflow_datasets as tfds
import matplotlib.pyplot as plt
# import tf.keras as keras
from model import Model

#######################################
config = tf.compat.v1.ConfigProto()   #
config.gpu_options.allow_growth = True#
tf.compat.v1.Session(config=config)   #
#######################################

_LABELS = [
    "Apple___Apple_scab",
    "Apple___Black_rot",
    "Apple___Cedar_apple_rust",
    "Apple___healthy",
    "Blueberry___healthy",
    "Cherry___healthy",
    "Cherry___Powdery_mildew",
    "Corn___Cercospora_leaf_spot Gray_leaf_spot",
    "Corn___Common_rust",
    "Corn___healthy",
    "Corn___Northern_Leaf_Blight",
    "Grape___Black_rot",
    "Grape___Esca_(Black_Measles)",
    "Grape___healthy",
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
    "Orange___Haunglongbing_(Citrus_greening)",
    "Peach___Bacterial_spot",
    "Peach___healthy",
    "Pepper,_bell___Bacterial_spot",
    "Pepper,_bell___healthy",
    "Potato___Early_blight",
    "Potato___healthy",
    "Potato___Late_blight",
    "Raspberry___healthy",
    "Soybean___healthy",
    "Squash___Powdery_mildew",
    "Strawberry___healthy",
    "Strawberry___Leaf_scorch",
    "Tomato___Bacterial_spot",
    "Tomato___Early_blight",
    "Tomato___healthy",
    "Tomato___Late_blight",
    "Tomato___Leaf_Mold",
    "Tomato___Septoria_leaf_spot",
    "Tomato___Spider_mites Two-spotted_spider_mite",
    "Tomato___Target_Spot",
    "Tomato___Tomato_mosaic_virus",
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
]

def normalize_img(image, label):
  """Normalizes images: `uint8` -> `float32`."""
  label = tf.one_hot(label, depth=len(_LABELS))
  return tf.cast(image, tf.float32) / 255., label

BATCH_SIZE=16

if __name__ == "__main__":
    (ds_train, ds_test), ds_info = tfds.load(
        'PlantVillage',
        split=['train[:70%]', 'train[70%:]'],
        shuffle_files=True,
        as_supervised=True,
        with_info=True,
    )
    ds_train = ds_train.map(
    normalize_img, num_parallel_calls=tf.data.experimental.AUTOTUNE)
    ds_train = ds_train.cache()
    # ds_train = ds_train.shuffle(ds_info.splits['train'].num_examples)
    ds_train = ds_train.batch(BATCH_SIZE)
    ds_train = ds_train.prefetch(tf.data.experimental.AUTOTUNE)

    ds_test = ds_test.map(
    normalize_img, num_parallel_calls=tf.data.experimental.AUTOTUNE)
    ds_test = ds_test.batch(BATCH_SIZE)
    ds_test = ds_test.cache()
    ds_test = ds_test.prefetch(tf.data.experimental.AUTOTUNE)



    model = Model()
    model.model.fit(ds_train, epochs=6, validation_data=ds_test)
    # ds = ds.batch(10).map(lambda x, y: (x, tf.one_hot(y, depth=3)))
    # for example in train:  # example is `{'image': tf.Tensor, 'label': tf.Tensor}`
    #     #print(list(example.keys()))
    #     image = example["image"]
    #     label = example["label"]
    #     one = tf.one_hot(label, depth=38).numpy()
    #     print("label : ", len(one), label.numpy(),one)
    #     plt.imshow(image.numpy())
    #     plt.show()

    # print(len(_LABELS))
    


    