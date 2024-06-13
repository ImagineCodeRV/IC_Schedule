from rest_framework import serializers
from .models import Event, Room
from django.contrib.auth.models import User

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class EventSerializer(serializers.ModelSerializer):
    participants = UserSerializer(many=True, read_only=True)
    participants_ids = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), write_only=True, many=True)
    
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'date', 'start_time', 'end_time', 'room', 'participants', 'participants_ids', 'created_by']
        extra_kwargs = {'created_by': {'read_only': True}}
    
    def create(self, validated_data):
        participants = validated_data.pop('participants_ids')
        event = Event.objects.create(**validated_data)
        event.participants.set(participants)
        return event
