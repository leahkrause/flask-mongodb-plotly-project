# project-3
QR code at the bottom for our website. 
![map](https://i.imgur.com/Wy08HEY.png)

## Overview

This project is focused on analyzing the rise of mass shootings in the USA over the past several decades. The goal is to gain insights into the frequency, location, and other characteristics of these events, as well as to explore potential correlations with various social and political factors.

## Data Sources

The primary data source for this project is The Violence Project Database, a database that tracks incidents of mass shootings in the USA.

## Data Cleaning and Analysis

Before beginning analysis, The Violence Project Database will need to be cleaned and organized. This may involve removing duplicate entries, standardizing location data, and filling in missing information where possible.

Analysis will then involve a combination of descriptive statistics, data visualization, and potentially more complex statistical modeling techniques. The goal is to identify patterns and trends in the data, as well as to explore potential correlations with social and political factors such as gun laws, mental health policies, and demographic changes.

We analyzed perpetrators gender, age, mental illness, social leakage, social media usage by grouping by year and binning data based off of age groups and decades. This allowed for a summary of the data and ease of viewing. 


## Ethics and Bias
Mass shootings are a highly sensitive and controversial topic, and it is important to approach this analysis with sensitivity and awareness of potential biases. In particular, it will be important to avoid perpetuating harmful stereotypes or reinforcing pre-existing political positions.

To mitigate these risks, the analysis will be conducted in a transparent and open manner, with a focus on using data and statistics to inform conclusions. Where appropriate, the analysis will also acknowledge the limitations of the data and the potential for bias or confounding factors to affect the results.

## Flask & Solution
When there is a problem, there is a solution! Created a few slides on preventing or solving Mass Shootings in America. I used html along with css and they style I wanted to create. From using a template that shows different slides with a click of a button from left to right. The Flask was created by also using html as a design. With a push of the button, it automatically sends you to our website created! 

## Interactive Map
To access the interactive map, navigate to the website and click on "Check out Shootings map". This map utilizes the Mother Jones - Mass Shootings Database dataset in order to visualize the scale and increasing frequency of mass shootings in modern day US. Clicking on the map markers will pull up details featuring the Case, Location, Date, Fatalities, Injured, and a Summary detailing the events that unfolded during the case. The marker size is scaled based on the number of fatalities, hence the more fatalities per case the larger the markers may appear. Layers have been added divided by decades per case which allows us to make a direct comparison in the number of cases from as far back as 1980s to today.

![Screenshot 2023-04-06 at 12 03 51 PM](https://user-images.githubusercontent.com/115597437/230472085-84323f55-f1f6-42df-ac2a-0b28ed048181.png)
