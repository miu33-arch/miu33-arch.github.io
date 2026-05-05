import 'package:flutter/material.dart';

void main() {
  runApp(const MiuStudioApp());
}

class MiuStudioApp extends StatelessWidget {
  const MiuStudioApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF0A0A0A), // Obsidian Black
      ),
      home: const MiuLandingPage(),
    );
  }
}

class MiuLandingPage extends StatelessWidget {
  const MiuLandingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        // The Outer Frame
        decoration: BoxDecoration(
          border: Border.all(
            color: const Color(0xFFC9A46A).withOpacity(0.2), // Faint gold border
            width: 20,
          ),
        ),
        child: Center(
          child: Text(
            '势', 
            style: TextStyle(
              fontSize: 120,
              color: const Color(0xFFC9A46A), // Miu Gold
              fontWeight: FontWeight.w100,
              shadows: [
                Shadow(blurRadius: 10.0, color: Color(0xFFC9A46A)),
                Shadow(blurRadius: 40.0, color: Color(0xFFC9A46A).withOpacity(0.8)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}