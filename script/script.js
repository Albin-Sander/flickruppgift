function searchFlickr() {
document.getElementById("picturePer").addEventListener("search", searchFlickr);
document.getElementById("myInput").addEventListener("search", searchFlickr);
let searchTag = document.getElementById("myInput").value;
let searchPerPage = document.getElementById("picturePer").value;
let searchURL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=' + searchTag + '&per_page=' + searchPerPage + '&format=json&nojsoncallback=1';


async function fetchFlickr() {
    const URL = searchURL;
    try {
      const fetchResult = fetch(
        URL, { method: 'GET'}
      );
      const response = await fetchResult;
      const jsonDatas = await response.json();
      console.log(jsonDatas);
      fetchFlickr2(jsonDatas);
    } catch(e){
      throw Error(e);
    }
  }
  fetchFlickr()
  }

function fetchFlickr2(jsonDatas){
    
    let jsonData = jsonDatas.photos.photo;
    
    for (i = 0; i < jsonData.length; i++) {
        
        console.log(jsonData[i]);
        let jsonFarmId = jsonData[i].farm;
        console.log(jsonFarmId);
        let jsonServerId = jsonData[i].server;
        console.log(jsonServerId);
        let jsonId = jsonData[i].id;
        console.log(jsonId);
        let jsonSecret = jsonData[i].secret;
        console.log(jsonSecret);


        let pictureUrl = 'http://farm' + jsonFarmId + '.static.flickr.com/' + jsonServerId + '/' +jsonId + '_' +jsonSecret + '.jpg'
        console.log(pictureUrl);


            var img = document.createElement("img");
            //img.height = height;
            img.src = pictureUrl;
            document.body.appendChild(img);

            
            
            let modal = document.getElementById("myModal");
            let imgages = document.getElementsByTagName(img);
             modalimgages = document.getElementById("img01");
             
          
            img.onclick = function () {
             modal.style.display = "block";  
             modalimgages.src = this.src;
              
             
            }

            

            
            
 
            var span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
              modal.style.display = "none";
            }
            
 
            var span = document.getElementsByClassName("close")[0];
 
            span.onclick = function() { 
             modal.style.display = "none";

             modal
             
           }}}

           


            



           


        
           

        


        
          







        

        




        
        
       

        
        




        //let li =document.createElement("li")
        //let el = document.createElement("img")



        


        
        



 

        
    


    









/*let jsonId = data.photos.photo[0].id;
for (i = 0; i < jsonId.length; i++) {
    console.log(jsonId[i]);
}

*/






