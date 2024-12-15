from django.db import models

# Create your models here.
class Property( models.Model ):
    rating = models.FloatField( default=4.99 ) # change later to forign key to rating model
    price = models.FloatField( default=99.99 )

    # Location
    address = models.CharField( default='Mhamid' )
    country = models.CharField( default='Morocco' )
    city = models.CharField( default='Marrakesh' )
    
