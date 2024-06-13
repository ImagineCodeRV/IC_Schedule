import 'dart:convert';

import '../models/event.dart';

List<Event> mockEvents = [
  Event(
    id: '1',
    title: 'Reunião de Projeto',
    description: 'Discussão sobre o projeto X',
    date: DateTime.now().add(Duration(days: 1)),
    user: 'user1',
    room: 'Sala 1', 
    startTime: '', 
    endTime: '', 
    //roomId: null, 
    participantIds: [],
  ),
  Event(
    id: '2',
    title: 'Sessão de Brainstorming',
    description: 'Ideias para o novo produto',
    date: DateTime.now().add(Duration(days: 2)),
    user: 'user2',
    room: 'Sala 2', 
    startTime: '', 
    endTime: '', 
    //roomId: null, 
    participantIds: [],
  ),
  Event(
    id: '3',
    title: 'Revisão Semanal',
    description: 'Revisão das atividades da semana',
    date: DateTime.now().add(Duration(days: 3)),
    user: 'user3',
    room: 'Sala 3', 
    startTime: '', 
    endTime: '', 
    //roomId: null, 
    participantIds: [],
  ),
];
