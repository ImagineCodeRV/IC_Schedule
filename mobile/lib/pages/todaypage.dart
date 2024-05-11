
import 'package:flutter/material.dart';

class TodayPage extends StatefulWidget {
  const TodayPage({super.key});

  @override
  State<TodayPage> createState() => _TodayPageState();
}

class _TodayPageState extends State<TodayPage> {
  Color bgColor = Colors.white;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('Today'),
      ),
    );
  }
}
