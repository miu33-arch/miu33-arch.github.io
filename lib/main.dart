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
    return const Scaffold(
      body: Center(
        child: Text(
          '势', // Shì - Power/Momentum
          style: TextStyle(
            fontSize: 100,
            color: Color(0xFFC9A46A), // Miu Gold
            fontWeight: FontWeight.w100,
            letterSpacing: 8,
          ),
        ),
      ),
    );
  }
}