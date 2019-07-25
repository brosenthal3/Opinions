var ideologiesList = [
    "Facism",
    "Anarcho-Capitalism",
    "Conservatism",
    "Classical Liberalism",
    "Marxism/leninism",
    "Socialism",
    "Anarcho-Communism",
    "Democratic-Socialism",
    "Centre-left",
    "Centre-Right"
];

class ideology{
    constructor(xmin, xmax, ymin, ymax, name);
}

var facism = new ideology(0,7,4,7, "Facism");
var ancap = new ideology(0,7,-7,-3, "Anarcho-Capitalism");
var conservatism = new ideology(1,7,1,4, "Conservatism");
var classlib = new ideology(1,7,-3,1, "Classical Liberalism");
var centre_right = new ideology(0,1,-3,4, "Centre Right");
var marxism = new ideology(-7,0,4,7, "Marxism/Leninism");
var socialism = new ideology(-7,-1,0,4, "Socialism");
var ancom = new ideology(-7,0,-7,-4, "Anarcho-Communism");
var demsoc = new ideology(-7,-1,-4,0, "Democratic-Socialism");
var centre_left = new ideology(-1,0,-4,4, "Centre Left");