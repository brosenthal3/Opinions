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
    constructor(xmin, xmax, ymin, ymax, name, description, image, imageDesc){
        //smallest x position on the political compass
        this.xmin = xmin;
        //highest x position on the political compass
        this.xmax = xmax;
        //same but with y
        this.ymin = ymin;
        this.ymax = ymax;
        //the name of the ideology ie: "communism"
        this.name = name;
        //the description of the ideology
        this.description = description;
        //the name of the image + description of the image for this ideology
        this.image = image;
        this.imageDesc = imageDesc;
    }
}

//an array of all of the ideologies, instances of the ideology class.
var ideologyObjects = [
     facism = new ideology(0,14,8,14, "Fascism", "Fascism is a form of government which is a type of one-party dictatorship. Fascists are against democracy. They work for a totalitarian one-party state. This aim is to prepare the nation for armed conflict, and to respond to economic difficulties.", "Fascism", "Benito Mussolini"),
     conservatism = new ideology(2,14,2,8, "Conservatism", "Conservatism (or conservativism) is any political philosophy that favors tradition (in the sense of various religious, cultural, or nationally-defined beliefs and customs) in the face of external forces for change, and is critical of proposals for radical social change.", "Conservatism", "Ronald Reagan"),
     ancap = new ideology(3,14,-14,-6, "Anarcho-Capitalism", "Anarcho-capitalism is a political philosophy and modern school of anarchist thought that advocates the elimination of centralized state domination in favor of self-ownership, private property and free markets.", "Anarcho-Capitalism", "Lysander Spooner"),
     classlib = new ideology(2,14,-6,2, "Classical-Liberalism", "Classical liberalism. Classical liberalism is a political philosophy and ideology belonging to liberalism in which primary emphasis is placed on securing the freedom of the individual by limiting the power of the government.", "Classical-Liberalism", "Friedrich Hayek"),
     centre_right = new ideology(0,2,-6,8, "Centre-Right", "Centre-right politics, also referred to as moderate-right politics, are politics that lean to the right of the left-right political spectrum, but are closer to the centre than other right-wing variants. From the 1780s to the 1880s, there was a shift in the Western world of social class structure and the economy, moving away from the nobility and mercantilism, and moving towards the bourgeoisie and capitalism.", "Centre-Right", "Theodore Roosevelt"),
     communism = new ideology(-14,0,8,14, "Communism", "Communism is a political and economic system that seeks to create a classless society in which the major means of production, such as mines and factories, are owned and controlled by the public.", "Communism", "Karl Marx"),
     socialism = new ideology(-14,-2,0,8, "Socialism", "Socialism is a range of economic and social systems characterised by social ownership of the means of production and workers' self-management, as well as the political theories and movements associated with them.", "Socialism", "Leon Trotsky"),
     ancom = new ideology(-14,-3,-14,-8, "Anarcho-Communism", "Anarchist communism advocates the abolition of the state, private property and capitalism in favor of common ownership or control of the means of production. Only through such collective control, it argues, can \"the individual\" be free of governmental domination and economic, that is, capitalist, exploitation.", "Anarcho-Communism", "Ayn Rand"),
     demsoc = new ideology(-14,-2,-8,0, "Democratic-Socialism", "Democratic socialism is a political philosophy that advocates political democracy alongside a socially owned economy, with an emphasis on workers' self-management and democratic control of economic institutions within a market or some form of a decentralised planned socialist economy.", "Democratic-Socialism", "Franklin D. Roosevelt"),
     centre_left = new ideology(-2,0,-8,8, "Centre-Left", "Centre-left politics are political views that lean to the left-wing political spectrum, but closer to the centre. Those on the centre-left believe in working within the established systems to improve social justice. The centre-left promotes a degree of social equality that it believes is achievable through promoting equal opportunity.", "Centre-Left", "Woodrow Wilson"),
     liberterian = new ideology(-3,3,-14,-8, "Libertarianism", "Libertarianism is an idea in ethics and politics. Libertarians believe that people should be able to do whatever they desire as long as their actions do not harm others. Many of the beliefs of libertarianism are similar to the beliefs in classical liberalism. The most important and basic human rights, according to libertarianism, are life, liberty and property.", "Liberterianism", "John Locke")
];