// STAGE 1: AUTHORIZATION (Imports must be at the very top)
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

// STAGE 2: THE ENGINE (Main Entry Point)
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
        scaffoldBackgroundColor: const Color(0xFF0A0A0A), // The Pure Void
      ),
      home: const MiuLandingPage(),
    );
  }
}

// STAGE 3: THE MASTER VAULT (Stateful Logic)
class MiuLandingPage extends StatefulWidget {
  const MiuLandingPage({super.key});

  @override
  State<MiuLandingPage> createState() => _MiuLandingPageState();
}

class _MiuLandingPageState extends State<MiuLandingPage> {
  late VideoPlayerController _vaultController;

  @override
  void initState() {
    super.initState();
    // 2nd Block: Logic Injection
    _vaultController = VideoPlayerController.asset('videos/master_vault.mp4')
      ..initialize().then((_) {
        _vaultController.setLooping(true);
        _vaultController.setVolume(0); // Silent atmosphere
        _vaultController.play();
        setState(() {}); // Activate the engine
      });
  }

  @override
  void dispose() {
    _vaultController.dispose(); // Shut down the vault
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black, // The Pure Void
      body: Stack(
        children: [
          // Layer 1: The Master Vault Video
          if (_vaultController.value.isInitialized)
            SizedBox.expand(
              child: FittedBox(
                fit: BoxFit.cover,
                child: SizedBox(
                  width: _vaultController.value.size.width,
                  height: _vaultController.value.size.height,
                  child: VideoPlayer(_vaultController),
                ),
              ),
            ),
          
          // Layer 2: Your Gold '势' Seal (Floating on top)
          const Center(
            child: Text(
              '势',
              style: TextStyle(
                color: Color(0xFFFFD700), // Metallic Gold
                fontSize: 80,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ),
    );
  }
}