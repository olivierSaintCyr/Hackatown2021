import tensorflow as tf
from tensorflow.keras.applications import ResNet50V2
import keras
#######################################
config = tf.compat.v1.ConfigProto()   #
config.gpu_options.allow_growth = True#
tf.compat.v1.Session(config=config)   #
#######################################

class Model(object):
    def __init__(self):
        self.model = self.build_model()

    def build_model(self):
        resnet = ResNet50V2(
            input_shape=(64, 64, 3),
            weights="imagenet",
            include_top=False,
            pooling=max,
            classifier_activation='relu'
        )
        
        resnet.trainable = True
        model = tf.keras.models.Sequential()

        #model.add(tf.keras.layers.experimental.preprocessing.Resizing(64, 64, interpolation="bilinear"))

        model.add(resnet)
        model.add(keras.layers.GlobalMaxPooling2D())
        
        model.add(keras.layers.Dense(38, activation = 'softmax'))
        model.compile(loss = 'categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
        return model
    
    def load_model(self, path):
        self.model = keras.models.load_model(path)

    def train_model(self, ds):
        self.model.fit(ds)
