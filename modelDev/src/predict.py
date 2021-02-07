import tensorflow as tf
import tensorflow_datasets as tfds
import matplotlib.pyplot as plt
from PIL import Image
import numpy as np

from model import Model

def to_label(output):
    return tf.math.argmax(output)

if __name__ == "__main__":
    image = np.asarray(Image.open("src/018e494e-d2eb-468b-9d02-40219d9f4921___JR_B.Spot 9045.jpeg"))
    image = tf.convert_to_tensor(image, dtype=tf.float32)
    
    image = tf.reshape(image, [1, 256, 256, 3])
    image = tf.image.resize(image, [64, 64])
    image = image/ 255.
    
    model = tf.keras.models.load_model("models/model3.h5")
    
    prediction = model.predict(image)
    tf.print(prediction)
    tf.print(to_label(prediction[0]))
    