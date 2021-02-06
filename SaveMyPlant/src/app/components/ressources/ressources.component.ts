import { Component, OnInit } from '@angular/core';
import { Card } from "../../models/card";
@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {
  cards:Array<Card>;
  states = [
      ["Apple___Apple_scab", "https://www2.gov.bc.ca/gov/content/industry/agriculture-seafood/animals-and-crops/plant-health/insects-and-plant-diseases/tree-fruits/apple-scab#:~:text=Home%20gardeners%20who%20remove%20all,to%20deactivate%20the%20scab%20fungus."],
      ["Apple___Black_rot", "http://www.omafra.gov.on.ca/IPM/french/apples/diseases-and-disorders/black-rot.html"],
      ["Apple___healthy", "HEALTHY"],
      ["Apple___Cedar_apple_rust", "https://www.planetnatural.com/pest-problem-solver/plant-disease/cedar-apple-rust/"],
      ["Blueberry___healthy", "HEALTHY"],
      ["Cherry___healthy", "HEALTHY"],
      ["Cherry___Powdery_mildew", "http://treefruit.wsu.edu/crop-protection/disease-management/cherry-powdery-mildew/#:~:text=Powdery%20mildew%20of%20sweet%20and,1)."],
      ["Corn___Cercospora_leaf_spot Gray_leaf_spot", "url"],
      ["Corn___Common_rust", "URL"],
      ["Corn___healthy", "URL"],
      ["Corn___Northern_Leaf_Blight", "URL"],
      ["Grape___Black_rot", "URL"],
      ["Grape___Esca_(Black_Measles)", "URL"],
      ["Grape___healthy", "URL"],
      ["Grape___Leaf_blight_(Isariopsis_Leaf_Spot)", "URL"],
      ["Orange___Haunglongbing_(Citrus_greening)", "URL"],
      ["Peach___Bacterial_spot", "URL"],
      ["Peach___healthy", "URL"],
      ["Pepper,_bell___Bacterial_spot", "URL"],
      ["Pepper,_bell___healthy", "URL"],
      ["Potato___Early_blight", "URL"],
      ["Potato___healthy", "URL"],
      ["Potato___Late_blight", "URL"],
      ["Raspberry___healthy", "URL"],
      ["Soybean___healthy", "URL"],
      ["Squash___Powdery_mildew", "URL"],
      ["Strawberry___healthy", "URL"],
      ["Strawberry___Leaf_scorch", "URL"],
      ["Tomato___Bacterial_spot", "URL"],
      ["Tomato___Early_blight", "URL"],
      ["Tomato___healthy", "URL"],
      ["Tomato___Late_blight", "URL"],
      ["Tomato___Leaf_Mold", "URL"],
      ["Tomato___Septoria_leaf_spot", "URL"],
      ["Tomato___Spider_mites Two-spotted_spider_mite", "URL"],
      ["Tomato___Target_Spot", "URL"],
      ["Tomato___Tomato_mosaic_virus", "URL"],
      ["Tomato___Tomato_Yellow_Leaf_Curl_Virus", "https://www2.ipm.ucanr.edu/agriculture/tomato/tomato-yellow-leaf-curl/"],
  ]

  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        name: " Apple",
        disease: "Black rot",
        url: new URL("https://plantvillage.psu.edu/topics/apple/infos")
      },
      {
        name: "Apple",
        disease: "Flyspeck",
        url: new URL("https://plantvillage.psu.edu/topics/apple/infos")
      },
      {
        name: "Apple",
        disease: "black",
        url: new URL("https://plantvillage.psu.edu/topics/apple/infos")
      },
      {
        name: "Cherry",
        disease: "Powdery mildew",
        url: new URL("https://plantvillage.psu.edu/topics/cherry-including-sour/infos")
      },
      {
        name: " Apple",
        disease: "Black rot",
        url: new URL("https://plantvillage.psu.edu/topics/apple/infos")
      },
      {
        name: "Apple",
        disease: "Flyspeck",
        url: new URL("https://plantvillage.psu.edu/topics/apple/infos")
      },
      {
        name: "Apple",
        disease: "black",
        url: new URL("https://plantvillage.psu.edu/topics/apple/infos")
      },
      {
        name: "Cherry",
        disease: "Powdery mildew",
        url: new URL("https://plantvillage.psu.edu/topics/cherry-including-sour/infos")
      }
    
    ]
  }

}
