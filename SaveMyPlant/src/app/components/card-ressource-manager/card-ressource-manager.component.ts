import { Component, OnInit } from '@angular/core';
import { Card } from "../../models/card"
import { CardRessourceComponent } from "../card-ressource/card-ressource.component"

@Component({
  selector: 'app-card-ressource-manager',
  templateUrl: './card-ressource-manager.component.html',
  styleUrls: ['./card-ressource-manager.component.css']
})
export class CardRessourceManagerComponent implements OnInit {
  cards:Array<Card> = [];
  constructor() { }

  states = [
    ["Apple", "Apple scab", "https://www2.gov.bc.ca/gov/content/industry/agriculture-seafood/animals-and-crops/plant-health/insects-and-plant-diseases/tree-fruits/apple-scab#:~:text=Home%20gardeners%20who%20remove%20all,to%20deactivate%20the%20scab%20fungus.", "https://www2.gov.bc.ca/assets/gov/farming-natural-resources-and-industry/agriculture-and-seafood/animal-and-crops/plant-health-images/applescab-leaf.jpg"],
    ["Apple", "Black rot", "http://www.omafra.gov.on.ca/IPM/french/apples/diseases-and-disorders/black-rot.html","http://www.omafra.gov.on.ca/english/crops/facts/blackrotf1.jpg"],
    ["Apple", "HEALTHY", "HEALTHY"],
    ["Apple", "Cedar apple rust", "https://www.planetnatural.com/pest-problem-solver/plant-disease/cedar-apple-rust/", "https://www.planetnatural.com/wp-content/uploads/2012/12/apple-rust.jpg"],
    ["Blueberry", "HEALTHY", "HEALTHY"],
    ["Cherry", "HEALTHY", "HEALTHY"],
    ["Cherry", "Powdery mildew", "http://treefruit.wsu.edu/crop-protection/disease-management/cherry-powdery-mildew/#:~:text=Powdery%20mildew%20of%20sweet%20and,1", "http://treefruit.wsu.edu/wp-content/uploads/2017/05/Fig2-300x225.png"],
    ["Corn", "Cercospora leaf spot & Gray leaf spot", "https://fieldcrops.cals.cornell.edu/corn/diseases-corn/gray-leaf-spot/", "https://fieldcrops.cals.cornell.edu/sites/fieldcrops.cals.cornell.edu/files/resize/shared/images/Gray%20Leaf%20Spot%20on%20Corn%20-%2007282020%20-%20Chemung%20NY-5744%20web-263x346.jpg"],
    ["Corn", "Common rust", "https://fieldcrops.cals.cornell.edu/corn/diseases-corn/common-rust/", "https://fieldcrops.cals.cornell.edu/sites/fieldcrops.cals.cornell.edu/files/resize/shared/images/CommRust4-9-250x376.gif"],
    ["Corn", "HEALTHY", "URL"],
    ["Corn", "Northern Leaf Blight", "https://cropprotectionnetwork.org/resources/articles/diseases/northern-corn-leaf-blight-of-corn", "https://crop-protection-network.s3.amazonaws.com/articles/NLB-Daren-Mueller-02.jpg"],
    ["Grape", "Black rot", "https://www.finegardening.com/article/eco-friendly-ways-to-control-black-rot-on-a-grape-plant", "https://kentuckypestnews.files.wordpress.com/2016/07/black-rot-of-grape_figure-1.jpg"],
    ["Grape", "Esca (Black Measles)", "http://ipm.ucanr.edu/PMG/r302100611.html#MANAGEMENT", "http://www.evineyardapp.com/blog/wp-content/uploads/2016/02/esca.jpg"],
    ["Grape", "HEALTHY", "HEALTHY"],
    ["Grape", "Leaf blight (Isariopsis Leaf Spot)", "https://www.gardeningknowhow.com/plant-problems/disease/plant-leaf-spots.htm", "https://www.gardeningknowhow.com/wp-content/uploads/2010/08/leaf-spots-400x300.jpg"],
    ["Orange", "Haunglongbing (Citrus greening)", "https://www.bioadvanced.com/articles/controlling-asian-citrus-psyllids-and-citrus-greening-disease", "http://newsstand.clemson.edu/wp-content/uploads/2017/01/Fig-1E-typical-blotchy-mottle-on-lemon.jpg"],
    ["Peach", "Bacterial spot", "https://www.canr.msu.edu/news/management_of_bacterial_spot_on_peaches_and_nectarines", "https://www.cabi.org/isc/portfolio/compendia/normal/12699.img"],
    ["Peach", "HEALTHY", "HEALTHY"],
    ["Pepper", "Bacterial spot", "https://www.gardeningknowhow.com/edible/vegetables/pepper/bacterial-leaf-spot-on-peppers.htm", "http://www.omafra.gov.on.ca/IPM/images/tomatoes/diseases-and-disorders/bacterial-speck/tomato_bacterial-speck_01_zoom.jpg"],
    ["Pepper", "HEALTHY", "HEALTHY"],
    ["Potato", "Early blight", "https://www.planetnatural.com/pest-problem-solver/plant-disease/early-blight/", "https://www.planetnatural.com/wp-content/uploads/2012/12/potato-blight.jpg"],
    ["Potato", "HEALTHY", "HEALTHY"],
    ["Potato", "Late blight", "https://www.planetnatural.com/pest-problem-solver/plant-disease/late-blight/", "https://www.planetnatural.com/wp-content/uploads/2012/12/late-blight-tomato.jpg"],
    ["Raspberry", "HEALTHY", "HEALTHY"],
    ["Soybean", "HEALTHY", "HEALTHY"],
    ["Squash", "Powdery mildew", "https://growingrealfood.com/how-to-get-rid-of-mold-or-powdery-mildew-on-squash-or-cucumber-leaves/", "https://growingrealfood.com/wp-content/uploads/2013/08/Get-Rid-of-Mold-or-Powdery-Mildew-on-Squash-and-Cucumbers1-1.jpg"],
    ["Strawberry", "HEALTHY", "HEALTHY"],
    ["Strawberry", "Leaf scorch", "https://www.gardeningknowhow.com/edible/fruits/strawberry/strawberries-with-leaf-scorch.htm", "https://www.gardeningknowhow.com/wp-content/uploads/2018/09/strawberry-scorch-400x267.jpg"] ,
    ["Tomato", "Bacterial spot", "https://www.greenhousegrower.com/production/managing-bacterial-spot-in-tomatoes/", "https://files.greenhousegrower.com/greenhousegrow/wp-content/uploads/2020/01/Bacterial-Spot-Web.jpg"],
    ["Tomato", "Early blight", "https://www.pesches.com/blogs/news/how-to-fight-early-blight", "https://cdn.shopify.com/s/files/1/0290/0636/4777/articles/blight_700x.jpg"],
    ["Tomato", "HEALTHY", "HEALTHY"],
    ["Tomato", "Late blight", "https://www.planetnatural.com/pest-problem-solver/plant-disease/late-blight/", "https://www.planetnatural.com/wp-content/uploads/2012/12/late-blight-tomato.jpg"],
    ["Tomato", "Leaf Mold", "https://www.gardeningchannel.com/tomato-diseases-how-to-fight-leaf-mold/", "http://www.hort.cornell.edu/livegpath/images/leaf_mold_nightshade1x1200.jpg"],
    ["Tomato", "Septoria leaf spot", "https://www.nature-and-garden.com/gardening/septoria.html", "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2019/08/septoria.jpg"],
    ["Tomato", "Spider mites", "https://homeguides.sfgate.com/rid-mites-tomatoes-83020.html", "https://citybugs.tamu.edu/files/2010/06/spider-mites-on-tomato.jpg"],
    ["Tomato", "Target Spot", "https://www.gardeningknowhow.com/edible/vegetables/tomato/target-spot-on-tomatoes.htm", "https://barmac.com.au/wp-content/uploads/sites/3/2016/01/Target-Spot-Tomato1.jpg"],
    ["Tomato", "Tomato mosaic virus", "https://burea-uinsurance.com/en/how-to-treat-tobacco-mosaic-virus-on-tomatoes/", "https://4.bp.blogspot.com/-7VnaDiXotUg/Utk8GFqc4vI/AAAAAAAAWbU/5gWIkaSdYlA/s1600/toma_TMV.jpg"],
    ["Tomato", "Tomato Yellow Leaf Curl Virus", "https://www2.ipm.ucanr.edu/agriculture/tomato/tomato-yellow-leaf-curl/", "https://ucanr.edu/delivers/impactfiles/647.jpg"]
]

  ngOnInit(): void {
    for(let i in this.states) {
      if(this.states[i][1] != "HEALTHY") {
        console.log(i)
        let newCard = new Card();
        newCard.name = this.states[i][0];
        newCard.disease = this.states[i][1];
        newCard.url = new URL(this.states[i][2]);
        newCard.image = new URL(this.states[i][3]);
        this.cards.push(newCard);
      }
    }
  }

  getCard(i) {
    let newCard = new Card();
    newCard.name = this.states[i][0];
    newCard.disease = this.states[i][1];
    newCard.url = new URL(this.states[i][2]);
    if(this.states[i][1] != "HEALTHY") {
      newCard.image = new URL("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Light_green_check.svg/1024px-Light_green_check.svg.png");
    }
    else {
      newCard.image = new URL(this.states[i][3]);
    }
    return newCard;
  }
}
