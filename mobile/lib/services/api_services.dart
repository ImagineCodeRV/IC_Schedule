import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:mobile/models/event.dart';
import 'package:mobile/models/contact.dart';
import '../models/room.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:mobile/mock_data/mock_events.dart'; // Importar dados mock
import 'package:mobile/mock_data/mock_contacts.dart'; // Importar dados mock

class ApiService {
  static const String _baseUrl = 'http://localhost:8000/api'; // URL base real

  static Future<List<Event>> fetchEvents() async {
    // Simulação de atraso para testes
    await Future.delayed(Duration(seconds: 1));
    return mockEvents; // Retornar dados mock
  }

  static Future<List<Contact>> fetchContacts() async {
    // Simulação de atraso para testes
    await Future.delayed(Duration(seconds: 1));
    return mockContacts; // Retornar dados mock
  }

  // Métodos originais comentados para desativar a comunicação com o backend

  static Future<List<Room>> fetchRooms() async {
    final prefs = await SharedPreferences.getInstance();
    final accessToken = prefs.getString('access_token');
    final response = await http.get(
      Uri.parse('$_baseUrl/rooms/'),
      headers: {
        'Authorization': 'Bearer $accessToken',
      },
    );

    if (response.statusCode == 200) {
      Iterable l = json.decode(response.body);
      return List<Room>.from(l.map((model) => Room.fromJson(model)));
    } else {
      throw Exception('Failed to load rooms');
    }
  }

  static Future<void> createEvent(Event event) async {
    final prefs = await SharedPreferences.getInstance();
    final accessToken = prefs.getString('access_token');
    final response = await http.post(
      Uri.parse('$_baseUrl/events/'),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $accessToken',
      },
      body: json.encode(event.toJson()),
    );

    if (response.statusCode != 201) {
      throw Exception('Failed to create event');
    }
  }
}
