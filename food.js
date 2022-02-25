var food = [
    {
      title: 'dog food',
      image: './img/gerbile.jpg',
      price: '$50.00-$100.00'
      description
    },
    {
      title: 'cat food',
      image: './img/gerbile.jpg',
      price: '$20.00-$30.00'
      description
    },
    {
      title: 'fish food',
      image: './img/gerbile.jpg',
      price: '$10.00- $20.00'
      description
    },
    
  
    
    ]
    
    var postHTML = " "
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
  
  
    for (var i=0; i < ; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="' + shop[i] + '"/'
        var price = '<p> $' + .price + '</p></span>'
        var description = '<div class=""><p>'+ .description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML