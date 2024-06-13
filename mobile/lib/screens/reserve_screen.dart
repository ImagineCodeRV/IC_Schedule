import 'package:flutter/material.dart';
import 'package:multi_select_flutter/multi_select_flutter.dart';
import 'package:mobile/models/event.dart';
import 'package:mobile/models/room.dart';
import 'package:mobile/models/contact.dart';
import 'package:mobile/mock_data/mock_room.dart'; // Importa dados fictícios

class ReserveScreen extends StatefulWidget {
  @override
  _ReserveScreenState createState() => _ReserveScreenState();
}

class _ReserveScreenState extends State<ReserveScreen> {
  final _formKey = GlobalKey<FormState>();
  String _title = '';
  String _description = '';
  DateTime _selectedDate = DateTime.now();
  TimeOfDay _startTime = TimeOfDay.now();
  TimeOfDay _endTime = TimeOfDay.now();
  int? _selectedRoomId;
  List<int> _selectedParticipantIds = [];
  List<Room> _rooms = mockRooms; // Usando dados fictícios
  List<Contact> _contacts = mockContacts; // Usando dados fictícios
  bool _isLoading = false;

  String _convertTimeOfDayToString(TimeOfDay time) {
    final now = DateTime.now();
    final dt = DateTime(now.year, now.month, now.day, time.hour, time.minute);
    final isoString = dt.toIso8601String();
    return isoString.split('T')[1];
  }

  Future<void> _createEvent() async {
    if (_selectedRoomId == null || _selectedParticipantIds.isEmpty) {
      // Handle error - must select room and at least one participant
      return;
    }

    final event = Event(
      id: '',
      title: _title,
      description: _description,
      date: _selectedDate,
      startTime: _convertTimeOfDayToString(_startTime),
      endTime: _convertTimeOfDayToString(_endTime),
      // roomId: _selectedRoomId!,
      participantIds: _selectedParticipantIds, user: '', room: '',
    );

    setState(() {
      _isLoading = true;
    });

    // Simulando um tempo de resposta
    await Future.delayed(Duration(seconds: 2));

    print('Evento criado: $event');

    setState(() {
      _isLoading = false;
    });

    // Fechar a tela após a criação do evento
    Navigator.of(context).pop();
  }

  Future<void> _selectDate(BuildContext context) async {
    final DateTime? picked = await showDatePicker(
      context: context,
      initialDate: _selectedDate,
      firstDate: DateTime(2021),
      lastDate: DateTime(2025),
    );
    if (picked != null && picked != _selectedDate)
      setState(() {
        _selectedDate = picked;
      });
  }

  Future<void> _selectStartTime(BuildContext context) async {
    final TimeOfDay? picked = await showTimePicker(
      context: context,
      initialTime: _startTime,
    );
    if (picked != null && picked != _startTime)
      setState(() {
        _startTime = picked;
      });
  }

  Future<void> _selectEndTime(BuildContext context) async {
    final TimeOfDay? picked = await showTimePicker(
      context: context,
      initialTime: _endTime,
    );
    if (picked != null && picked != _endTime)
      setState(() {
        _endTime = picked;
      });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Reserve a Room'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: _isLoading
            ? Center(child: CircularProgressIndicator())
            : Form(
                key: _formKey,
                child: ListView(
                  children: [
                    TextFormField(
                      decoration: InputDecoration(labelText: 'Title'),
                      onChanged: (value) {
                        setState(() {
                          _title = value;
                        });
                      },
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter a title';
                        }
                        return null;
                      },
                    ),
                    TextFormField(
                      decoration: InputDecoration(labelText: 'Description'),
                      onChanged: (value) {
                        setState(() {
                          _description = value;
                        });
                      },
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter a description';
                        }
                        return null;
                      },
                    ),
                    ListTile(
                      title: Text(
                          "Date: ${_selectedDate.toLocal()}".split(' ')[0]),
                      trailing: Icon(Icons.keyboard_arrow_down),
                      onTap: () => _selectDate(context),
                    ),
                    ListTile(
                      title: Text("Start Time: ${_startTime.format(context)}"),
                      trailing: Icon(Icons.keyboard_arrow_down),
                      onTap: () => _selectStartTime(context),
                    ),
                    ListTile(
                      title: Text("End Time: ${_endTime.format(context)}"),
                      trailing: Icon(Icons.keyboard_arrow_down),
                      onTap: () => _selectEndTime(context),
                    ),
                    DropdownButtonFormField<int>(
                      decoration: InputDecoration(labelText: 'Select Room'),
                      value: _selectedRoomId,
                      items: _rooms.map((Room room) {
                        return DropdownMenuItem<int>(
                          value: room.id,
                          child: Text(room.name),
                        );
                      }).toList(),
                      onChanged: (int? value) {
                        setState(() {
                          _selectedRoomId = value;
                        });
                      },
                      validator: (value) {
                        if (value == null) {
                          return 'Please select a room';
                        }
                        return null;
                      },
                    ),
                    MultiSelectDialogField(
                      items: _contacts.map((Contact contact) {
                        return MultiSelectItem(contact.id, contact.name);
                      }).toList(),
                      title: Text("Participants"),
                      selectedColor: Colors.blue,
                      decoration: BoxDecoration(
                        color: Colors.blue.withOpacity(0.1),
                        borderRadius: BorderRadius.all(Radius.circular(40)),
                        border: Border.all(
                          color: Colors.blue,
                          width: 2,
                        ),
                      ),
                      buttonIcon: Icon(
                        Icons.person,
                        color: Colors.blue,
                      ),
                      buttonText: Text(
                        "Select Participants",
                        style: TextStyle(
                          color: Colors.blue[800],
                          fontSize: 16,
                        ),
                      ),
                      onConfirm: (results) {
                        setState(() {
                          _selectedParticipantIds = results.cast<int>();
                        });
                      },
                      chipDisplay: MultiSelectChipDisplay(
                        onTap: (item) {
                          setState(() {
                            _selectedParticipantIds.remove(item);
                          });
                        },
                      ),
                    ),
                    SizedBox(height: 20),
                    ElevatedButton(
                      onPressed: () {
                        if (_formKey.currentState!.validate()) {
                          _createEvent();
                        }
                      },
                      child: Text('Reserve'),
                    ),
                  ],
                ),
              ),
      ),
    );
  }
}
