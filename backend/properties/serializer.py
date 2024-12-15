from rest_framework import serializers

class PropertySerializer( serializers.ModelSerializer ):
    Location = serializers.SerializerMethodField(  )
    class Meta:
        fields = [
            'Location',
            'price',
            'rating'
        ]
    def get_Location( self, obj ):
        return f"{obj.address},{obj.country}"