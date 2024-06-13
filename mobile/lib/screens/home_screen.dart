import 'package:flutter/material.dart';
import 'event_screen.dart';
import 'contact_screen.dart';
import 'calendar_screen.dart'; // Importar a tela de calendário

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Agenda App'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => EventScreen()),
                );
              },
              child: Text('Eventos'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => ContactScreen()),
                );
              },
              child: Text('Contatos'),
            ),
            ElevatedButton(
              // Adicionar botão para navegar para a tela de calendário
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => CalendarScreen()),
                );
              },
              child: Text('Calendário'),
            ),
          ],
        ),
      ),
    );
  }
}
