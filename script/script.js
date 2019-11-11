function searchFlickr() {

document.getElementById("myInput").addEventListener("search", searchFlickr);
let searchTag = document.getElementById("myInput").value;
let searchURL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=' + searchTag + '&format=json&nojsoncallback=1';
$.ajax({
    url: searchURL,
    type: 'GET',
    dataType: "json",
    success: displayAll
});
}



function displayAll(data){
    
    let jsonData = data.photos.photo;
    
    for (i = 0; i < jsonData.length; i++) {
        
        console.log(jsonData[i]);
        let jsonFarmId = data.photos.photo[i].farm;
        console.log(jsonFarmId);
        let jsonServerId = data.photos.photo[i].server;
        console.log(jsonServerId);
        let jsonId = data.photos.photo[i].id;
        console.log(jsonId);
        let jsonSecret = data.photos.photo[i].secret;
        console.log(jsonSecret);


        let pictureUrl = 'http://farm' + jsonFarmId + '.static.flickr.com/' + jsonServerId + '/' +jsonId + '_' +jsonSecret + '.jpg'
        console.log(pictureUrl);

        catchPicture()

        .catch(error => {
            console.error(error);
        });
        
       

        
        async function catchPicture() {
            const response = await fetch("http://farm" + data.photos.photo[i].farm + ".static.flickr.com/" + data.photos.photo[i].server + "/"+data.photos.photo[i].id + "_"+data.photos.photo[i].secret + ".jpg"
            );
            const blob = await response.blob();
            document.getElementById('picture1').src = URL.createObjectURL(blob);
            document.getElementById('picture2').src = URL.createObjectURL(blob);
            console.log(catchPicture);
        }
        }
        }



 

        
    


    









/*let jsonId = data.photos.photo[0].id;
for (i = 0; i < jsonId.length; i++) {
    console.log(jsonId[i]);
}

*/






