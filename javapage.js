const DIV = $("#div")
const nameInput = $("#Name")
const img = $("#Img")
const desprection = $("#dis")
const price = $("#price")
const DivR =$("#divR")

const foodArray = [ {nameFood: "Pasta" , ImgFood: "https://www.seriouseats.com/thmb/4iMAXM7v-ezJB7FJh4u_e0OcQ_Y=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__01__20141222-pasta-making-vicky-wasik-50-25f1e346c83144b3b6ae7c3e148578cc.jpg" , DesFood: "A light, springy, delicate homemade fresh pasta, this recipe is as well", priceFood: "12.33$"},
{nameFood:"Spaghetti" , ImgFood:"https://a7m3f5i5.rocketcdn.me/wp-content/uploads/2015/09/moms-spaghetti-sauce-recipe-a-healthy-slice-of-life-6-of-6-800x600.jpg",DesFood:"This simple spaghetti and meat sauce is bursting with flavor",priceFood:"12.33$"},
{nameFood:"Grape-Leaves", ImgFood:"https://www.simplyleb.com/wp-content/uploads/Grape-Leaves-13.jpg",DesFood:"Lebanese Stuffed Grape Leaves",priceFood:"5$"},
{nameFood:"Steak" , ImgFood:"https://www.taabkh.com/files/styles/recipe/public/recipe/2020/01/grilled-steak-marinade-yogurt.jpg",DesFood:"This grilled flank steak is seasoned with the smoky flavors of chili powder, paprika, and cumin. ...",priceFood:"16$"},
{nameFood:"Burger" , ImgFood:"https://www.seriouseats.com/thmb/_oHgH0Fc-5fs8WkYvxsqgtv2pDA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210607-CLASSICSMASHEDBURGS-JANJIGIAN-seriouseats-10-8af40a4a1698459c99e7f3c0df7f6a0f.jpg",DesFood:"HALLOUMI BURGER WITH CRANBERRY AND MAPLE SAUCE AND LETTUCE",priceFood:"7$"},
{nameFood:"Pizza" , ImgFood:"https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F15%2Fmozzarella-pizza-margherita-FT-RECIPE0621.jpg",DesFood:"Margherita Pizza with Tomato, Mozzarella and Basil",priceFood:"10$"},
{nameFood:"Chicken kabsa", ImgFood:"https://img-global.cpcdn.com/recipes/34a4f228d0523116/1200x630cq70/photo.jpg",DesFood:"A traditional Gulf dish of flavorful spiced rice with golden roasted chicken, garnished with toasted ...‏",priceFood:"12.33$"},
{nameFood:"Salad" , ImgFood:"https://www.recipetineats.com/wp-content/uploads/2021/08/Garden-Salad_47-SQ.jpg",DesFood:"Our Green Coral Salad is the easiest side dish that goes perfectly with just about anything!",priceFood:"4$"}
];

function renderArray(array){
  for (let i=0; i<array.length;i++)
  {
    const div =
    $(`<div>
    <button class="sweetBtn"  onclick="del(${i})">delete </button>
    <img src="${array[i].ImgFood}"><br>
    <h1>${array[i].nameFood}</h1>
    <p>${array[i].DesFood}</p>
    <p>${array[i].priceFood}</p> 
    </div>`);
    DIV.append(div)

  }
}
renderArray(foodArray);
function addCooked(){
  const newFood = {
    nameFood: nameInput.val(),
    ImgFood: img.val(),
    DesFood:desprection.val(),
    priceFood:price.val()
  };
  foodArray.push(newFood);
  renderArray([newFood]);
}

function HideHandler(){
  DivR.hide();

}
function showHandler() {
  DivR.show();

}
function del(dell){

  foodArray.splice(dell,1)
  DIV.html("");
  renderArray(foodArray)
}
