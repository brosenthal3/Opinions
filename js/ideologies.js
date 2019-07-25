//the list of all of the ideologies that can be viewd on the website
//this isn't used yet.
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

//a class for ideologies
class ideology{
    //the constructor
    constructor(xmin, xmax, ymin, ymax, name){
        //smallest x position on the political compass
        this.xmin = xmin;
        //highest x position on the political compass
        this.xmax = xmax;
        //same but with y
        this.ymin = ymin;
        this.ymax = ymax;
        //the name of the ideology ie: "communism"
        this.name = name;
    }
}

//an array of all of the ideologies, instances of the ideology class.
var ideologyObjects = [
     facism = new ideology(0,14,8,14, "Facism"),
     conservatism = new ideology(2,14,2,8, "Conservatism"),
     ancap = new ideology(3,14,-14,-6, "Anarcho-Capitalism"),
     classlib = new ideology(2,14,-6,2, "Classical Liberalism"),
     centre_right = new ideology(0,2,-6,8, "Centre Right"),
     marxism = new ideology(-14,0,8,14, "Communism"),
     socialism = new ideology(-14,-2,0,8, "Socialism"),
     ancom = new ideology(-14,-3,-14,-8, "Anarcho-Communism"),
     demsoc = new ideology(-14,-2,-8,0, "Democratic-Socialism"),
     centre_left = new ideology(-2,0,-8,8, "Centre Left"),
     liberterian = new ideology(-3,3,-14,-8, "Liberterianism")
];