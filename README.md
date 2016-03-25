# atom-antescofo-syntax theme

Antescofo Theme for Atom Text Editor.

Antescofo : http://repmus.ircam.fr/antescofo

Atom : https://atom.io/


This theme works with the Antescofo language package developped by :
- Pierre Donat-Bouillud:  https://github.com/programLyrique
- Clément PGP: https://github.com/ClementPGP

# Install : 

- Go to Atom/Settings(preferences)/Install/Theme/  
- Search for atom-antescofo-syntax
- Click intall
- Go to Settings/Theme
- Choose Atom Antescofo in the Syntax theme contextual menu
- Open .asco or .asco.txt file
- Choose Antescofo in the menu at the bottom right of the workspace

# Antescofo File Recognition :

To customize Atom when loading Antescofo files , you need only manually edit your Atom config.cson file :

- Open it using the Application: Open Your Config command from the Command Palette. 
- Add this to your configuration file under the *.core section:

<code>customFileTypes:
      "source.antescofo": [
        "asco"
        "asco.txt"
        "score"
        "score.txt"
      ]</code>
      
      

![A screenshot of your theme](https://github.com/nadirB/atom-antescofo-syntax/blob/master/atom-antescofo-screen-caps.png)
