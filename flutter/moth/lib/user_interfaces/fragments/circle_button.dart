import 'package:flutter/material.dart';

class CircleButton extends StatelessWidget {
  final GestureTapCallback onTap;
  final IconData iconData;

  const CircleButton({this.onTap, this.iconData});

  @override
  Widget build(BuildContext context) {
    double size = 90.0;

    Widget w = Container(
      height: size,
      width: size,
      child: RaisedButton(
        elevation: 8.0,
          onPressed: onTap,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(90.0)),
          color: Theme.of(context).primaryColor,
          child: Icon(
            iconData ?? Icons.crop_free,
            size: size / 2,
          )
      ),
    );

    return w;

    /*return RawMaterialButton(
      onPressed: onTap,
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor,
          shape: BoxShape.circle,
        ),
        child: Icon(
          iconData ?? Icons.crop_free,
          size: size / 2,
        ),
      ),
    );*/
  }
}
