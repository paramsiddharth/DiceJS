<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">
        <title>DiceJS - Documentation</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <script src='../source/dice.js'></script>
        <link href='style.css' rel='stylesheet' type='text/css'>
        <link href='icon.ico' rel='shortcut-icon'>
    </head>
    <body>
        <h1>
            DiceJS <img style='height:25px;width:25px;' src='die_anim.gif'>
        </h1>
        <p>
            DiceJS is a free JavaScript plugin to simulate six-sided dice in webpages.
            <br/>Download from <a href='https://github.com/paramsiddharth/DiceJS'>GitHub</a>.
            <br/>Meet the creator, <a href='http://paramsiddharth.blogspot.com'>Param Siddharth</a>.
        </p>
        <h3>Usage</h3>
        <p>
            The only dependancies are JavaScript (ES6 onwards) and HTML canvases.<br/>
            To use DiceJS in the webpage, <code>dice.js</code> must be referenced via a <code>&lt;script&gt;</code> tag in the webpage.
            <div class='code'><code>
                &lt;!DOCTYPE html&gt;<br />
&lt;html&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;head&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;script src='dice.js'&gt;&lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/head&gt;<br />
...
                </code></div>
            This would allow 3 functions, namely <code>makeDice()</code>, <code>makeDie()</code>, and <code>rollDie()</code> to be used.
        </p>
        <p>
            The functions may then be used via a <code>&lt;script&gt;</code> tag in the very end of the webpage body.
            <div class='code'>
                <code>
                    &lt;body&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;...<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;script&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;// The functions may be used here.<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/script&gt;<br />
&lt;/body&gt;
                </code>
            </div>
        </p>
        <h3>Functions</h3>
        <ul>
            <li>
                <h4 id='diceFn'><code>makeDice()</code></h4>
                <p>
                    Appends a die with the desired characteristics as a child canvas to the selected element(s) and returns an array of <a href='#dobj'>die objects</a> when selecting elements belonging to a particular class or with a particular tag name, and a single <a href='#dobj'>die object</a> when selecting an element with a particular ID.
                    <code class='prot'>makeDice(ver = 10, hor = 10, invert = false, elem = '.jdie', rollonclick = true, bgcl = '#FFFFFF', dcl = '#000000')</code>
                    <ul class='params'>
                        Arguments:
                        <li>
                            <code>ver</code> - The height of the die in pixels (10 by default).
                        </li>
                        <li>
                            <code>hor</code> - The width of the die in pixels (10 by default).
                        </li>
                        <li>
                            <code>invert</code> - Decides whether or not to invert the die/dice (<code>false</code> by default).<br/>
                            The default colour scheme for the dice is black for the border and dots, and white for the inner background, otherwise passed separately as <code>bgcl</code> and <code>dcl</code>. Passing <code>true</code> would reverse them.
                        </li>
                        <li>
                            <code>elem</code> - Decides which elements to affect (<code>'.jdie'</code> by default).<br/>
                            Passing <code>.foo</code> would select all elements of the class <code>foo</code>.<br/>
                            Passing <code>#viniet</code> would select the element with the ID <code>viniet</code>.<br/>
                            Passing <code>p</code> would select all <code>&lt;p&gt;</code> elements.<br/>
                            Note that only one class/ID/name may be passed at a time.<br/>
                            To all the selected elements, <code>makeDice()</code> would append a child canvas which would function as a die with the desired characteristics.
                        </li>
                        <li>
                            <code>rollonclick</code> - Decides whether or not clicking the die would roll it (<code>true</code> by default).<br/>
                        </li>
                        <li>
                            <code>bgcl</code> - The colour for the inner background (<code>'#FFFFFF'</code> (white) by default).<br/>
                        </li>
                        <li>
                            <code>dcl</code> - The colour for the border and dots. (<code>'#000000'</code> (black) by default).<br/>
                        </li>
                    </ul>
                </p>
            </li>
            <li>
                <h4 id='dieFn'><code>makeDie()</code></h4>
                <p>
                    Creates a die using the passed <code>&lt;canvas&gt;</code> element with the desired characteristics and returns a <a href='#dobj'>die object</a> pertaining to the same.<br/> 
                    It is automatically called by <code><a href='#diceFn'>makeDice()</a></code> for creating individual dice.
                    Note that it doesn't affect the dimensions of the canvas. In order to do that, use <code><a href='#diceFn'>makeDice()</a></code> instead.
                    <code class='prot'>makeDie(canvas, invert = false, rollonclick = true, bgcl = '#FFFFFF', dcl = '#000000')</code>
                    <ul class='params'>
                        Arguments:
                        <li>
                            <code>canvas</code> - The canvas element to modify i. e. Create a die using.
                        </li>
                        <li>
                            <code>invert</code> - Decides whether or not to invert the die/dice (<code>false</code> by default).<br/>
                            The default colour scheme for the dice is black for the border and dots, and white for the inner background. Passing <code>true</code> would reverse that.
                        </li>
                        <li>
                            <code>rollonclick</code> - Decides whether or not clicking the die would roll it (<code>true</code> by default).<br/>
                        </li>
                        <li>
                            <code>bgcl</code> - The colour for the inner background (<code>'#FFFFFF'</code> (white) by default).<br/>
                        </li>
                        <li>
                            <code>dcl</code> - The colour for the border and dots. (<code>'#000000'</code> (black) by default).<br/>
                        </li>
                    </ul>
                </p>
            </li>
            <li>
                <h4 id='rollFn'><code>rollDie()</code></h4>
                <p>
                    Rolls the die represented by the passed <code>&lt;canvas&gt;</code> element and returns the number on the top of the die after rolling.<br/>
                    Note that it expects a canvas as the first argument and not a <a href='#dobj'>die object</a>. To roll the die represented by a <a href='#dobj'>die object</a>, call <code>obj.roll()</code> instead, where <code>obj</code> is the object.
                    <code class='prot'>rollDie(canvas, invert = false, bgcl = '#FFFFFF', dcl = '#000000')</code>
                    <ul class='params'>
                        Arguments:
                        <li>
                            <code>canvas</code> - The canvas element to modify i. e. Create a die using.
                        </li>
                        <li>
                            <code>bgcl</code> - The colour for the inner background (<code>'#FFFFFF'</code> (white) by default).<br/>
                        </li>
                        <li>
                            <code>dcl</code> - The colour for the border and dots. (<code>'#000000'</code> (black) by default).<br/>
                        </li>
                    </ul>
                </p>
            </li>
        </ul>
        <h3 id='dobj'>Die Objects</h3>
        <p>
            A die object would refer to an object of the following form:
            <div class='mcode'><code>{<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;name: <i class="fas fa-address-card"></i>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;roll: <i class="fas fa-apple-alt"></i><br/>
                }</code>
            </div>
            Here, <i class="fas fa-address-card"></i> is the canvas element associated with the die, while <i class="fas fa-apple-alt"></i> is the method that would roll the die. 
        </p>
        <h3>Examples</h3>
        <ul id='examples'>
            <li>Simply adding dice to all elements of class <code>jdie</code> by default.<br/>
                Code:
                <div class='code'>
                    <code>&lt;!DOCTYPE html&gt;<br />
&lt;html&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;head&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;script src='dice.js'&gt;&lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/head&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;body&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;p&gt;Hey! I got a die over here: &lt;span class='jdie'&gt;&lt;/span&gt;&lt;/p&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;script&gt;makeDice();&lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/body&gt;<br />
&lt;/html&gt;</code>
                </div>
                Result:
                <div class='outputbox'>Hey! I got a die over here: <span id='example1'></span></div>
            Try clicking it.
            </li>
            <li>Having customized dimensions and colour inversion.<br/>
                Code:
                <div class='code'>
                    <code>&lt;!DOCTYPE html&gt;<br />
&lt;html&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;head&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;script src='dice.js'&gt;&lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/head&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;body&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;p&gt;Hey! I got a die over here: &lt;span class='jdie'&gt;&lt;/span&gt;&lt;/p&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;script&gt;makeDice(20,24,true);&lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/body&gt;<br />
&lt;/html&gt;</code>
                </div>
                Result:
                <div class='outputbox'>Hey! I got a die over here: <span id='example2'></span></div>
            </li>
            <li>Selecting multiple elements of the same class.<br/>
                Code:
                <div class='code'>
                    <code>&lt;!DOCTYPE html&gt;<br />
&lt;html&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;head&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;script src='dice.js'&gt;&lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/head&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;body&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;p&gt;Hey! I got a die over here: &lt;span class='haha'&gt;&lt;/span&gt;&lt;/p&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        One here as well: &lt;i class='haha'&gt;&lt;/i&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 makeDice(30,30,false,&quot;.haha&quot;);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/body&gt;<br />
&lt;/html&gt;</code>
                </div>
                Result:
                <div class='outputbox'>Hey! I got a die over here: <span class='example3'></span>
                    <br/>One here as well: <i class='example3'></i>
                </div>
            </li>
            <li>Selecting a die object from a returned array and customizing the die (and its parent) using its die object.<br/>
                Code:
                <div class='code'>
                    <code>&lt;!DOCTYPE html&gt;<br />
&lt;html&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;head&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;script src='dice.js'&gt;&lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/head&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;body&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;p&gt;&lt;div&gt&lt;div&gt;This die is nice: &lt;b&gt;&lt;/b&gt;&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;div&gt;This die is good: &lt;b&gt;&lt;/b&gt;&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 var t = makeDice(20,50,false,&quot;b&quot;);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 var p = t.length-1;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 t[p].element.parentNode.style += 'line-height:'+t[p].element.height+2+'pxx;vertical-align:middle;';<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 t[p].element.width = 40;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 t[p].element.height = 60;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 t[p]=makeDie(t[p].element,true,false);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 t[p].element.style.borderColor = '#0000ff';<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 t[p].element.style.borderWidth = '6px';<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 t[p].element.style.borderRadius = '10px';<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 var a = setInterval(t[p].roll,100);<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             &lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/body&gt;<br />
&lt;/html&gt;</code>
                </div>
                Result:
                <div class='outputbox'><span>This die is nice: <span class='example4'></span></span>
                    <br/><span>This die is good: <i class='example4'></i></span>
                </div>
            </li>
            <li>Selecting a die object from a returned array and customizing the die (and its parent) using its die object.<br/>
                Code:
                <div class='code'>
                    <code>&lt;!DOCTYPE html&gt;<br />
&lt;html&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;head&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;script src='dice.js'&gt;&lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/head&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;body&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;u id='lallu'&gt;&lt;/u&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            makeDice(30,30,false,'#lallu',true,'red','blue');<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        &lt;/script&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;    &lt;/body&gt;<br />
&lt;/html&gt;</code>
                </div>
                Result:
                <div class='outputbox'>
                    <u id='example5'></u>
                </div>
            </li>
        </ul>
        <h3>Footnotes</h3>
        <p>
            Hey there! It's me, Param. <img src='https://a.deviantart.net/avatars-big/p/a/paramsiddharth.jpg' style='height:12px;width:12px;border-radius:6px;'><br/>I am a simple person who wants to become wise and loves the nature. I love learning new things and making stuff, like songs, computer applications, art, et cetera.<br/>
            <br/>Here is my <a href='http://www.facebook.com/paramsiddharthofficial'>Facebook</a> page.<br/>
            I post often on <a href='http://www.twitter.com/paramsiddharth'>Twitter</a>.<br/>
            I am quite active on <a href='http://www.instagram.com/paramsiddharth'>Instagram</a>.<br/>
            Sometimes, I post videos on <a href='http://www.youtube.com/channel/UC8NHH480saPgR9wnAR4HbKg'>YouTube</a>.<br/>
            I am an artist, so you will find me in places like <a href='https://open.spotify.com/artist/1bUv1VdCaRqqHIgsSfUqkU'>Spotify</a> and <a href='https://www.deviantart.com/paramsiddharth'>DeviantArt</a> too.
            <br/>That's all for now. :) Stay happy and healthy!
        </p>
        <footer>
            <p><span>Made with <span id='hrt'>&#10084;</span> by <a href='http://paramsiddharth.blogspot.in' id='myLink'>Param</a>.</span></p>
            <p>&copy; Param Siddharth 2020-<script>document.write((new Date()).getFullYear());</script></p>
        </footer>
        <script>
            makeDice(10,10,false,'#example1',true);
            makeDice(20,24,true,'#example2',true);
            makeDice(30,30,false,'.example3',true);
            let j = makeDice(20,50,false,'.example4',true),
            i = j.length-1;
            j[i].element.parentNode.style += 'line-height:'+j[i].element.height+2+'pxx;vertical-align:middle;';
            j[i].element.width = 40;
            j[i].element.height = 60;
            j[i]=makeDie(j[i].element,true,false);
            j[i].element.style.borderColor = '#0000ff';
            j[i].element.style.borderWidth = '6px';
            j[i].element.style.borderRadius = '10px';
            let ai = setInterval(j[i].roll,100);
            makeDice(30,30,false,'#example5',true,'red','blue');
        </script>
        <script src="https://kit.fontawesome.com/74679dc38c.js" crossorigin="anonymous"></script>
    </body>
</html>
