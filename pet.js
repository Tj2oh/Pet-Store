var pets = [
    {
      title: 'dogs',
      image: './dogs!.jpg',
      price: '500-$1,000',
      description: ''
    },
    {
      title: 'cats',
      image: './cats!.jpg',
      price: '200-$500',
      description: ''
    },
    {
      title: 'fish',
      image: './fish!.jpg',
      price: '50-$100',
      description: ''
    },
    {
      title: 'hamsters',
      image: './hamsters!.jpg',
      price: '20-$40',
      description: ''
    },
    {
      title: 'toys!',
      image: './TOYYSS.jpg',
      price: '10-$20',
      description: ''
    },
    {
      title: 'food',
      image: './food1.jpg',
      price: '20-$60',
      description: ''
    },
    {
      title: 'rabbits',
      image: './rabbits!.jpg',
      price: '20-$40',
      description: ''
    },
    {
      title: 'turtles',
      image: './turtles.jpg',
      price: '20-$40',
      description: ''
    },
    ]
    
    var postHTML = " "
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
    for (var i=0; i < pets.length ; i++){
        var heading = '<div class="product ' + '"><span><h5>' + pets[i].title + '</h5>'
        var image = '<img class="img-fluid pets" src="' + pets[i].image + '"/'
        var price = '<p> $' + pets[i].price + '</p></span>'
        var description = '<div class=""><p>'+ pets[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML