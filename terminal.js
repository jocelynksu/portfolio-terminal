const root = '~';
let cwd = root;
let new_user = true;

function linkedinalert(){
    if (confirm("WARNING! This will open another tab. Do you wish to continue?")){
      window.open("https://linkedin.com/in/jocelynksu", target="_blank");
    }
  }

const directories = {
    education: [
        '',
        '<bold><goldenrod>Georgia Institute of Technology</goldenrod></bold>',
        '   <gainsboro>--> <bold>Major</bold>: B.S. Computer Science 2025, Information Internetworks/Systems Architecture Concentration \n              M.S. Computer Science - Computing Systems 2026</gainsboro>',
        '   <gainsboro>--> <bold>GPA</bold>: 3.93</gainsboro>',
        '   <gainsboro>--> <bold>Involvement</bold>: GT Dragonflyers Director of Finance, Social Cultural Chair of Taiwanese American Student Association, National University of Singapore Foreign Exchange Fall 2023</gainsboro>',
        '',
        '<bold><goldenrod>National University of Singapore</goldenrod></bold>',
        '   <gainsboro>--> <bold>Major</bold>: Computer Science, Fall 2023 Foreign Exchange, Non-graduating</gainsboro>',
        '   <gainsboro>--> <bold>Involvement</bold>: NUS Lion Dance</gainsboro>',
        ''
    ],
    projects: [
        '',
        [
            ['Terminal Portfolio Website - 2024',
             'jocelynksu.github.io/terminal-portfolio/',
             'interactive terminal-like website that displays my education, career, and personal hobbies information \n             >> languages used: HTML, CSS, JavaScript (Jquery Terminal)\n'
            ],
            ['Personal Python-Inspired Website - 2022',
             'https://jocelynksu.github.io/personal-website/homepage.html',
             'personal website that mimics python script and shell to display resume information \n             >> links to additional html-based personal website displaying personal hobbies \n             >> languages used: HTML, CSS, JavaScript\n'
            ],
            
        ].map(([project_name, url, description='']) => {
            return `<gainsboro>   --> </gainsboro><skyblue><a href="${url}" target="_blank">${project_name}</a></skyblue> &mdash; <gainsboro>${description}</gainsboro>`;
        }),
        ''
    ].flat(),
    skills: [
        '',
        '<bold><cornflowerblue>Languages</cornflowerblue></bold>',
        [
            '   <gainsboro>--> Python</gainsboro>',
            '   <gainsboro>--> Java</gainsboro>',
            '   <gainsboro>--> C</gainsboro>',
            '   <gainsboro>--> HTML/CSS</gainsboro>',
            '   <gainsboro>--> JavaScript</gainsboro>',
            '   <gainsboro>--> Assembly</gainsboro>'
        ],
        '',
        '<bold><cornflowerblue>Tools</cornflowerblue></bold>',
        [
            '   <gainsboro>--> Docker</gainsboro>',
            '   <gainsboro>--> Git</gainsboro>',
            '   <gainsboro>--> CircuitSim</gainsboro>',
            '   <gainsboro>--> AWS API Gateway</gainsboro>',
            '   <gainsboro>--> AWS Lambda</gainsboro>',
            '   <gainsboro>--> Postman</gainsboro>',
            '   <gainsboro>--> PowerAutomate</gainsboro>',
            '   <gainsboro>--> PowerApp</gainsboro>',
            '   <gainsboro>--> Figma</gainsboro>',
            '   <gainsboro>--> Excel</gainsboro>',
        ],
        ''
        
    ].flat(),
    experience: [
        '',
        '<bold><cornflowerblue>The Cigna Group (May 2024 - Present)</cornflowerblue></bold>',
        '<italic><cornflowerblue>Technology Early Career Development Program (TECDP) SWE Intern, Performance Resiliency Engineering (PRE) Team</cornflowerblue></italic>',
        [
            '   <gainsboro>--> API testing and calling in Python to collect thousands of endpoint metrics to evaluate load-bearing capabilities for company applications.</gainsboro>',
            '   <gainsboro>--> Using pandas and openpyxl Python libraries to format endpoint metric dataframes into a human-readable format to be sent out to those running the load test.</gainsboro>',
            '   <gainsboro>--> Using AWS API Gateway, Lambda, and DynamoDB to create back-end for healthcare website that allows clients to view their current insurance plan, schedule doctors appointments, and communicate with AI powered chatbot to learn more about their plan and ask health related questions.</gainsboro>'
        ],
        '',
        '<bold><cornflowerblue>Humana (May 2023 - Aug 2023)</cornflowerblue></bold>',
        '<italic><cornflowerblue>Information Technology Intern, Technology Lifecycle Management (TLM) Team</cornflowerblue></italic>',
        [
            '   <gainsboro>--> Created Excel sheet using ServiceNow data to mark and filter through 1000+ Managed File Transfer (MFT) application owners, their active status, and their respective projects.</gainsboro>',
            '   <gainsboro>--> Created PowerApp form containing information on MFT app owners to be sent to 1000+ app owners to verify and update their information to be directly updated on the Excel sheet.</gainsboro>',
            '   <gainsboro>--> Monitored efficiency of internal technologoies by creating Excel pivot tables to track number of applications in dev, test, or QA stages to ensure they do not surpass their end of life date.</gainsboro>',
            '   <gainsboro>--> Worked at Humana\'s Louisville and Simpsonville Data Centers inputting 1500+ systems networking products to SunBird database, and updated inventory excel sheet.</gainsboro>'
        ],
        '',
        '<bold><cornflowerblue>Women\'s Health Awareness Foundation (Nov 2017 - Present)</cornflowerblue></bold>',
        '<italic><cornflowerblue>Co-Founder, Local Outreach Manager</cornflowerblue></italic>',
        [
            '   <gainsboro>--> Founded 501(c)(3) that works to combat period poverty and healthcare inequality for all local and international communities through in-kind/monetary local donations, social media campaigns, and international outreach, creating partnerships with \"on-the-ground\" organizations.</gainsboro>',
            '   <gainsboro>--> Donated 3000+ sanitary products and raised over $1500 to local and national non-profit organizations that combat homelessness, domestic violence, and human trafficking.</gainsboro>',
            '   <gainsboro>--> Fundraised and campaigned for international health organizations in Kenya and India, providing eco-friendly reusable menstrual pads for 250+ girls.</gainsboro>',
            '   <gainsboro>--> Received over $2500 in grant/award money from CEO of Global Paint for Charity and Cingo Pest Control (Circle and Shield Community Service Award).</gainsboro>'
        ],
        ''
    ].flat(),
    hobbies: [
        '',
        '<bold><indianred>In my free time, I like to...</indianred></bold>',
        [
            '   <gainsboro>--> <bold>Swim at my local YMCA!</bold> </gainsboro>',
            '   <gainsboro>--> <bold>Travel! </bold></gainsboro>',
            '   <gainsboro>   -> I\'ve been to 12 countries: USA, Canada, Mexico, Taiwan, Japan, Hong Kong, Vietnam, Indonesia, Malaysia, Singapore, Thailand, United Kingdom</gainsboro>',            
            '   <gainsboro>--> <bold>Hike! </bold></gainsboro>',
            '   <gainsboro>   -> I\'ve hiked the fallest mountain in Vietnam (Mt. Fansipan) and 2 active volcanoes in Indonesia (Mt. Bromo and Mt. Ijen)!!',            
            '   <gainsboro>--> <bold>Perform Chinese YoYo! </bold></gainsboro>',
            '   <gainsboro>   -> I\'ve been doing Chinese YoYo (otherwise known as the diabolo) for approx. 14 years! I\'ve performed throughout Metro Atlanta and have taught this hobby at public schools. I am currently the Chief Financial Officer for GT Dragonflyers, a Chinese YoYo club at Georgia Tech!',            
            '   <gainsboro>--> <bold>Chinese Lion Dance! </bold></gainsboro>',
            '   <gainsboro>   -> I\'ve been doing Lion Dance for over 2 years now. I\'ve performed at Atlanta Lunar New Year festivals throughout Atlanta!',            

        ],
        ''
    ].flat(),
    socials: [
        '',
        '<a href="https://www.linkedin.com/in/jocelynksu/" target="_blank"><bold><skyblue>LinkedIn</skyblue></bold></a>',
        '',
        '<a href="mailto:jocelynksu@gmail.com" target="_blank"><bold><skyblue>Email: jocelynksu@gmail.com</skyblue></bold></a>',
        ''
    ].flat(),
    
};

function print_dirs() {
    term.echo(Object.keys(directories).map(dir => {
        return `<lightskyblue class="directory">${dir}</lightskyblue>`;
    }).join('\n'));
}

const commands = {
    help() {
        const helpText = command_list.map(cmd => `- <white><bold>${cmd.name}:</white></bold> <silver>${cmd.description}</silver>`).join('\n');
        term.echo(`List of available commands:\n${helpText}\n`);
        if (new_user) {
            term.echo('<yellow>Type <italic>ls</italic> to get started!\n</yellow>')
        }
    },
    clear() {
        // const prompt = term.get_prompt();
        term.clear();
        ready();
    },
    echo(...args) {
        if (args.length > 0) {
            term.echo(`<silver>${args.join(' ')}</silver>`);
        }
    },
    cd(dir = null) {
        if (dir === null || (dir === '..' && cwd !== root)) {
            cwd = root;
        } else if (dir.startsWith('~/') && dir.includes(dir.substring(2))) {
            cwd = dir;
        } else if (dir.includes('education')) {
            if (new_user) {
                term.echo('<yellow>\nYou are now in the <italic>education</italic> directory. Type <bold>ls</bold> to learn about my educational background!\n</yellow>');
            }
            cwd = root + '/' + 'education';
        } else if (dir.includes('projects')) {
            if (new_user) {
                term.echo('<yellow>\nYou are now in the <italic>projects</italic> directory. Type <bold>ls</bold> to learn about projects I\'ve completed!\n</yellow>');
            }
            cwd = root + '/' + 'projects';
        } else if (dir.includes('skills')) {
            if (new_user) {
                term.echo('<yellow>\nYou are now in the <italic>skills</italic> directory. Type <bold>ls</bold> to learn about my technical skills\n</yellow>');
            }
            cwd = root + '/' + 'skills';
        } else if (dir.includes('experience')) {
            if (new_user) {
                term.echo('<yellow>\nYou are now in the <italic>experience</italic> directory. Type <bold>ls</bold> to learn about my professional experience!\n</yellow>');
            }
            cwd = root + '/' + 'experience';
        } else if (dir.includes('hobbies')) {
            if (new_user) {
                term.echo('<yellow>\nYou are now in the <italic>hobbies</italic> directory. Type <bold>ls</bold> to learn about my hobbies!\n</yellow>');
            }
            cwd = root + '/' + 'hobbies';
        } else if (dir.includes('socials')) {
            if (new_user) {
                term.echo('<yellow>\nYou are now in the <italic>socials</italic> directory. Type <bold>ls</bold> to learn about my contact information!\n</yellow>');
            }
            cwd = root + '/' + 'socials';
        } 
        else {
            this.error('Directory doesn\'t exist! Enter \'cd\' then \'ls\' to see available directories!');
        }
    },
    ls(dir = null) {
        if (dir) {
            if (dir.match(/^~\/?$/)) {
                // ls ~ or ls ~/
                print_dirs();
            } else if (dir.startsWith('~/')) {
                const path = dir.substring(2);
                const dirs = path.split('/');
                if (dirs.length > 1) {
                    this.error('Invalid directory');
                } else {
                    const dir = dirs[0];
                    this.echo(directories[dir].join('\n'));
                    // showNavigationInstructions();
                }
            } else if (cwd === root) {
                if (dir in directories) {
                    this.echo(directories[dir].join('\n'));
                    // showNavigationInstructions;
                } else {
                    this.error('Invalid directory');
                }
            } else if (dir === '..') {
                print_dirs();
            } else {
                this.error('Invalid directory');
            }
        } else if (cwd === root) {
            // term.echo('\n')
            print_dirs();
            if (new_user) {
                term.echo('\n<yellow>Above is a list of the possible directories you can enter! Type <bold>cd</bold> <italic>directory</italic> to enter that directory and learn more about me!</yellow>\n');
            }
        } else {
            const dir = cwd.substring(2);
            this.echo(directories[dir].join('\n'));
            if (new_user) {
                term.echo('<yellow>That\'s all for this directory! To see other directories you can explore, type <bold>cd</bold> to go back to the root directory, then <bold>ls</bold>. If you already know which directory you want to visit next, simply type <bold>cd</bold> <italic>directory</italic>.\n</yellow>')
            }
            // term.echo('testing');
            // showNavigationInstructions();
        }
        // show_ls_instructions();
    },
    website() {
        term.echo('<bold><lightpink>\nThis website was created using JQuery Terminal, HTML, and CSS! Here are some functionalities: \n</lightpink></bold>');
        term.echo([
            '   <lavender>--> Mimics actual terminal cd/ls functionalities and changes directory names when user uses cd commands</lavender>',
            '   <lavender>--> Automatically bolds terminal keywords as user is typing</lavender>',
            '   <lavender>--> First time user friendly -- provides direct instructions on how to navigate the platform for those with little-to-no terminal experience</lavender>',
            '   <lavender>--> Allows users to click on keywords to implement that command rather than typing it</lavender>',
            '   <lavender>--> Users can use up arrow key to access previous commands they typed into terminal',
            ''
        ]);
    }

    
};

// Function to show navigation instructions
// function show_ls_instructions() {
//     term.echo('\n')
//     term.echo(`<yellow>Type 'cd [directory]' to enter a directory.`);
//     term.echo(`Use 'ls' to list contents of the current directory.`);
//     term.echo(`Enter 'help' for a list of available commands.</yellow>`);
// }


const user = 'guest';
const server = 'jsu_terminal';

function prompt() {
    return `<limegreen>${user}@${server}</limegreen>:<lightskyblue>${cwd}</lightskyblue>$ `;
}

const font = 'ANSI Regular';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);


function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}

const greetings = `
██  ██████   ██████ ███████ ██      ██    ██ ███    ██     ███████ ██    ██ 
██ ██    ██ ██      ██      ██       ██  ██  ████   ██     ██      ██    ██ 
██ ██    ██ ██      █████   ██        ████   ██ ██  ██     ███████ ██    ██ 
██   ██ ██    ██ ██      ██      ██         ██    ██  ██ ██          ██ ██    ██ 
█████   ██████   ██████ ███████ ███████    ██    ██   ████     ███████  ██████  `
                                                                          
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false, //so echo works and takes in arguments
    exit: false,
    clear: false,
    completion(string) {
        // in every function we can use `this` to reference term object
        const cmd = this.get_command();
        // we process the command to extract the command name
        // at the rest of the command (the arguments as one string)
        const { name, rest } = $.terminal.parse_command(cmd);
        if (['cd'].includes(name)) {
            if (rest.startsWith('~/')) {
                return Object.keys(directories).map(dir => `~/${dir}`);
            }
            if (cwd === root) {
                return Object.keys(directories);
            }
        }
        return Object.keys(commands);
    },
    prompt
});

term.on('click', '.directory', function() {
    const dir = $(this).text();
    term.exec(`cd ~/${dir}`);
});

function render(text) {
    const cols = term.cols();
    return figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true,
    });
}

function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}

function ready() {
    const ascii_art = render('Jocelyn Su');
    const colored_ascii = `[[;lightskyblue;]${ascii_art}]`;
    term.echo(colored_ascii, { ansi: true }); 
    if (new_user) {
        // term.echo(colored_ascii, { ansi: true });
        term.push(function(command) {
            if (command.match(/^(yes|y)$/i)) {
                // term.echo('\n')
                new_user = true; // Set isNewUser to false if user confirms they are not new
                term.pop(); // Remove the prompt function
                term.echo('<limegreen>\nWelcome! Keep an eye out for the <bold><yellow>yellow</yellow></bold> instructions that will help you navigate this website!\nType <bold><yellow>help</yellow></bold> to get started.</limegreen>\n').resume();
                // show_ls_instructions(); // Display LS instructions after initial greeting
            } else if (command.match(/^(no|n)$/i)) {
                new_user = false; // Set isNewUser to false if user confirms they are not new
                // term.echo('\n')
                term.pop(); // Remove the prompt function
                term.echo('<limegreen>\nWelcome to Jocelyn Su\'s terminal portfolio! Enter <bold>help</bold> to see available commands.</limegreen>\n').resume();
                // term.echo('<limegreen>Welcome back! Enter <bold>help</bold> if you need assistance.</limegreen>\n').resume();
            } else {
                term.echo(`<red>Please enter 'yes' or 'no' to continue.</red>`).resume();
            }
        }, {
            prompt: '<tomato>Are you new to terminal commands? If yes, easy-to-follow instructions will guide you through this site. Enter <bold>(yes/no)</bold>: </tomato>'
        });
    }

 }

function rainbow(string, seed) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string, seed).join('\n');
}

const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  });

// const command_list = ['clear'].concat(Object.keys(commands));

const command_list = [
    { name: 'help', description: 'Displays this help message.' },
    { name: 'clear', description: 'Clears the terminal page.' },
    { name: 'echo <italic><gainsboro>text</gainsboro></italic>', description: 'Print the inputted text to the terminal.' },
    { name: 'ls', description: 'To list information in <italic>current</italic> directory.'},
    { name: 'cd <italic><gainsboro>directory</gainsboro></italic>', description: 'To select which directory to enter. Use "cd" to go to the root directory.' },
    { name: 'website', description: 'Displays information about this website\'s functionalities.' }
];

// to make list of commands white
// const formatted_list = command_list.map(cmd => {
//     return `<white class="command">${cmd}</white>`;
// });
// const help = formatter.format(formatted_list);

term.on('click', '.command', function() {
    const command = $(this).text();
    term.exec(command);
 });

 const command_names = command_list.map(cmd => cmd.name.split(' ')[0]);

//turns text white as we write if its a command
const any_command_re = new RegExp(`^\s*(${command_names.join('|')})`);
$.terminal.new_formatter([any_command_re, '<white>$1</white>']);








                                                                            
