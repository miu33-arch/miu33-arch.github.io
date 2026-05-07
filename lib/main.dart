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
    backgroundColor: const Color(0xFF0A0A0A), // Your Obsidian Black
    body: Stack(
      children: [
        // Layer 1: The Gold Blueprint Video
        Center(
          child: _vaultController.value.isInitialized
              ? AspectRatio(
                  aspectRatio: _vaultController.value.aspectRatio,
                  child: VideoPlayer(_vaultController),
                )
              : Container(),
        ),

        // Layer 2: Your Gold '势' Seal (Keep this in the middle!)
        const Center(
          child: Text(
            '势',
            style: TextStyle(
              color: Color(0xFFC9A46A),
              fontSize: 80,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),

        // Layer 3: The Admin Terminal Overlay
        Positioned(
          bottom: 50,
          left: 20,
          right: 20,
          child: TextField(
            style: const TextStyle(color: Color(0xFFC9A46A), fontFamily: 'monospace'),
            decoration: InputDecoration(
              prefixText: 'miu_admin@vault:~\$ ',
              prefixStyle: const TextStyle(color: Color(0xFF00FFFF)),
              hintText: 'Enter command...',
              hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.3)),
              filled: true,
              fillColor: Colors.black.withValues(alpha: 0.5),
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8),
                borderSide: const BorderSide(color: Color(0xFFC9A46A)),
              ),
            ),
          ),
        ),
      ],
    ),
  );
}
}