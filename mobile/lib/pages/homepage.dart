/*import 'package:mobile/pages/calendar.dart';
import 'package:mobile/pages/profilepage.dart';
import 'package:mobile/pages/todaypage.dart';
import 'package:mobile/widget/bottomnavigatorbar.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  double screenHeight = 0;
  double screenWidth = 0;
  Color primary = const Color.fromARGB(253, 17, 32, 167);
  int currentIndex = 0;

  List<IconData> navigationIcons = [
    FontAwesomeIcons.calendarDays,
    FontAwesomeIcons.check,
    FontAwesomeIcons.user,
  ];
  @override
  Widget build(BuildContext context) {
    screenHeight = MediaQuery.of(context).size.height;
    screenWidth = MediaQuery.of(context).size.width;
    return Scaffold(
      body: IndexedStack(
        index: currentIndex,
        children: const [
          CalendarPage(),
          TodayPage(),
          ProfilePage(),
        ],
      ),
      bottomNavigationBar: const BottomNavigatorBarWidget(),
    );
  }
}*/
