import 'package:flutter/material.dart';

final AppBar defaultAppBar = AppBar(title: Text('Contact Hub'));

bool _darkMode = false;

class Shared {
  static final ThemeData theme = ThemeData(
    brightness: darkMode ? Brightness.dark : Brightness.light,
    cursorColor: darkMode ? Colors.white : Colors.black,
  );

  static Color get lightPrimary => darkMode ? Colors.grey[800] : Colors.green[600];

  static Color get darkPrimary => darkMode ? Colors.grey[900] : Colors.green[800];

  static Color get lightSecondary => darkMode ? Colors.grey[600] : Colors.grey[300];

  static Color get darkSecondary => darkMode ? Colors.grey[800] : Colors.grey[400];

  static Color get buttonTextColor => darkMode ? Colors.white : Colors.white;

  static Color get textColor => darkMode ? Colors.grey[300] : Colors.black;

  static Color get unselectedMenu => darkMode ? Colors.grey[700] : Colors.black;

  static Color get selectedMenu => darkMode ? Colors.white : Colors.white;

  static bool get darkMode => _darkMode;

  static toggleDarkMode() {
    return _darkMode = !_darkMode;
  }

  static double getScreenHeight(BuildContext context) => MediaQuery.of(context).size.height;

  static double getScreenWidth(BuildContext context) => MediaQuery.of(context).size.width;
}
