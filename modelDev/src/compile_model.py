import os

MODEL_PATH = "models/"

if __name__=="__main__":
    command = 'tensorflowjs_converter --input_format=keras --output_format=tfjs_layers_model '
    command += MODEL_PATH + 'model4.h5 ' + MODEL_PATH + 'model_json'
    
    print("Compiling start")
    os.popen(command)
    print("Saved model to disk")



