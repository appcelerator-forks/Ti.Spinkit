var SpinKit = require('SpinKit/SpinKit');

exports.style = {
    'SPIN_STYLE_PLANE' : SpinKit.RTSpinKitViewStylePlane,
    'SPIN_STYLE_CIRCLE_FLIP': SpinKit.RTSpinKitViewStyleCircleFlip,
    'SPIN_STYLE_BOUNCE': SpinKit.RTSpinKitViewStyleBounce,
    'SPIN_STYLE_WAVE':  SpinKit.RTSpinKitViewStyleWave,
    'SPIN_STYLE_WANDERING_CUBES':  SpinKit.RTSpinKitViewStyleWanderingCubes,
    'SPIN_STYLE_PULSE':  SpinKit.RTSpinKitViewStylePulse,
    'SPIN_STYLE_CHASING_DOTS':  SpinKit.RTSpinKitViewStyleChasingDots,
    'SPIN_STYLE_THREE_BOUNCE':  SpinKit.RTSpinKitViewStyleThreeBounce,
    'SPIN_STYLE_CIRCLE':  SpinKit.RTSpinKitViewStyleCircle,
    'SPIN_STYLE_9_CUBE_GRID':  SpinKit.RTSpinKitViewStyle9CubeGrid,
    'SPIN_STYLE_WORDPRESS':  SpinKit.RTSpinKitViewStyleWordPress,
    'SPIN_STYLE_FADING_CIRCLE':  SpinKit.RTSpinKitViewStyleFadingCircle,
    'SPIN_STYLE_FADING_CIRCLE_ALT':  SpinKit.RTSpinKitViewStyleFadingCircleAlt,
    'SPIN_STYLE_ARC':  SpinKit.RTSpinKitViewStyleArc,
    'SPIN_STYLE_ARC_ALT':  SpinKit.RTSpinKitViewStyleArcAlt,
}

exports.createSpinner = function(style, color) {
    if (style) {
        if (color) {
            return require('SpinKit/RTSpinKitView').alloc().initWithStyleColor(style, color);
        } else {
            return require('SpinKit/RTSpinKitView').alloc().initWithStyle(style);
        }
    } else {
        return require('SpinKit/RTSpinKitView').alloc().init();
    }
};
