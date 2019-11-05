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
    const response = await fetch('https:farm66.staticflickr.com/65535/49017181663_80997984c3_m.jpg')
    const blob = await response.blob();
    document.getElementById('disney').src = URL.createObjectURL(blob);
}



/*farm-id: 66
server-id: 65535
photo-id: 49017181663
secret: 80997984c3
size: m*/


    



    
        
            
        
    