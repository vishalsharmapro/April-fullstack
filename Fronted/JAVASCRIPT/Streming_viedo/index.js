const carousaImages=["https://static.vecteezy.com/system/resources/previews/011/971/603/large_2x/banner-cover-movie-or-banner-layout-for-social-media-template-with-cinema-element-vector.jpg",
    "https://tse4.mm.bing.net/th/id/OIP.qy3KPQHykl6FkCwfP8NDnwHaJQ?pid=Api&P=0&h=180",
    "https://juksun.com/wp-content/uploads/2023/02/Fighter-Movie-Poster-4.jpg"
];
const carousalContainer=document.getElementById("carousal-container");
function initCarousal(){
    console.log("My Carousal");
    carousaImages.forEach((imageUrl,index)=>{
        const slide=document.createElement("div");
         if(index==0){
        slide.classList.add("active");
      }
       const img=document.createElement("img");
      img.className="carousal-image"
      img.src=imageUrl;
      slide.appendChild(img);
      carousalContainer.appendChild(slide);

    })
}
initCarousal()