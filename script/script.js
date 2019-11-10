const apiData = {
    url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&format=json&nojsoncallback=1',
    tags: '&tags=disney',
}


const {url, tags} = apiData
const apiUrl = `${url}${tags}`

fetch(apiUrl)
.then( (data) => console.log(data.json()))

let apiPictures = {
    url: 'https:farm66.staticflickr.com/65535/49017181663_80997984c3_m.jpg',
}

catchDisney()

.catch(error => {
    console.error(error);
});

async function catchDisney() {
    const response = await fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=disney&format=json&nojsoncallback=1')
    const blob = await response.blob();
    document.getElementById('disney').src = URL.createObjectURL(blob);
    console.log(catchDisney);
}

$.ajax({
    url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=19d3e6e0acfe9c438f368e2c2bab1c5d&tags=disney&format=json&nojsoncallback=1',
    type: 'GET',
    dataType: "json",
    success: displayAll
});

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

        
        }
        }

        
    


    









/*let jsonId = data.photos.photo[0].id;
for (i = 0; i < jsonId.length; i++) {
    console.log(jsonId[i]);
}

*/






