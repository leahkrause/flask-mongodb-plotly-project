from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def Shootings_in_America():

    my_html = '''



    <body style="background-color: #FF5733"
        <h style="font-family: Open Sans Condensed">
        <h style="color: #515A5A;"><b><font size="72px"><center>WHAT ARE THE SOLUTIONS?</center></font></b></h>
        <p style="color: #515A5A;"><center><font size="36px">Every problem has a solution, that is on you to decide so you can make a difference. Like, we'll leave it up to you.</center></font></p>
</h>
</body>

    <html>  
<center>
<head>  
<title>Center align button</title>  
<style>  
.container {  
width: 700px;  
height: 500px;  
border: 15px solid black;  
display: flex;  
justify-content: center;  
align-items: center;  
}  
button {  
background-color: RED;  
color: WHITE;  
font-size: 48px;  
}  
</style>  
</head>  
<body>  
<div class="container">  
<button onclick="window.location.href = 'http://project3.c1.biz/';"> Click here to save a life! </button>
</div>  
  
</body> 
</center> 
</html> 
    
    


    '''
    return my_html


if __name__  == "__main__":
    app.run(debug=True)
