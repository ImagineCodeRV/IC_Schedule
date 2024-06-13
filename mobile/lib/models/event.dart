class Event {
  final String id;
  final String title;
  final String description;
  final DateTime date;
  final String startTime;
  final String endTime;
  //final int roomId;
  final List<int> participantIds;

  Event({
    required this.id,
    required this.title,
    required this.description,
    required this.date,
    required this.startTime,
    required this.endTime,
    //required this.roomId,
    required this.participantIds, 
    required String user, 
    required String room,
  });

  factory Event.fromJson(Map<String, dynamic> json) {
    return Event(
      id: json['id'],
      title: json['title'],
      description: json['description'],
      date: DateTime.parse(json['date']),
      startTime: json['start_time'],
      endTime: json['end_time'],
      //roomId: json['room'],
      participantIds: List<int>.from(json['participants_ids']), 
      user: '', 
      room: '',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'description': description,
      'date': date.toIso8601String(),
      'start_time': startTime,
      'end_time': endTime,
      //'room': roomId,
      'participants_ids': participantIds,
    };
  }
}
