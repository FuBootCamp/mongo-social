
#
# MONGO SOCIAL (NoSQL social networkAPI)
######
![Static Badge](https://img.shields.io/badge/license_by-MIT-blue.svg)
###
## Table of contents
* [Description of the project](#description-section)
* [Installation instructions](#installation-section)
* [Usage information](#usage-section)
* [Contribution guidelines](#contribution-section)
* [Test instructions](#test-section)
* [Questions](#questions-section)
* [License information](#license-section)
<a id="description-section"></a>
## Description of the project
The challenge was about implementing the CRUD routines for a basic social network database,
using express to lift the server and mongoDB (document database).
It is really new for me to handle a document database (not SQL) like mongoDB. I consider that
it has great potential for the development of applications because of its great versatility.
For this database I also manage COMPASS, which is the console through which you can access the
database and is very helpful for the development process. Likewise, in this challenge we again
used the INSOMNIA functionality to manage the requisitions to the server and validate the correct
functioning of the code.

Accesing the database in COMPASS
![Insomnia Menu](/images/compass_db.png))


Handling a NoSQL database, I learned a lot:
a) To perfectly identify the differences with a relational database.

b) To understand the flexibility of being able to have a collection inside another one, which
for me is similar to having a relationship between two entities of a relational database,
but in the same document.

c) To take advantage of the orderly and functional nature of working with an MVC schema, where
each of these elements are developed independently. In this challenge we worked with the models
of the collections and with the controllers where the CRUD movements to the database were defined.

d) Even though this challenge did not provide a SEED routine to feed the database, I coded the
data.js and seed.js routines to check that the collection models had been properly coded.  Also,
by having a database with “data” (redundant terms), I was able to validate the correct 
functioning of the initial GET requests.

e) As I mentioned in another README file, I found that it is very important to read the 
documentation to better focus the coding. In addition to the documentation, for this challenge I
studied in a very deep way the mini-project, to understand the operation and methods of mongoDB.

f) Again I refer to the various sources of support to solve the problems at the time of coding,
internet consultations, video tutorials, but mainly I got great help from GitHub and the AI tool 
of the TEC Xpert portal, with which I could land on how to create and delete items from nested 
collections.

Finally, again a very sobering project in relation to database management.

<a id="installation-section"></a>
## Installation instructions

https://github.com/FuBootCamp/mongo-social

<a id="usage-section"></a>
## Usage information

The insomna menu CRUD's

![Insomnia Menu](/images/insomnia_menu.png))

<a id="contribution-section"></a>
## Contribution guidelines

Not applicable


<a id="test-section"></a>
## Test instructions

Link for the walkthrough video
https://drive.google.com/file/d/1E8xac5n11A_f57DGwTPPV0E94Y8esxpf/view

Start with the empty socialDB database.
Three users are created.
Copy the _id of the first user (user1) to use it in the other requirements. Update of a user is tested by changing the original email address.
After each change all users are displayed to verify on screen the changes.
Test the GET of a single user (user1).
A friend (user4) is created for user1.
The GET of a user's friends and users including friends is tested.
A GET of thoughts is made and is shown empty.
A thought is created for user1.
The _id of the thought is copied for use in the other requirements.
A reaction is created for the newly created thought.
GET all users and you can see user1 with a thought which in turn has a reaction, and with a friend.
All DELETE (reaction, thought, friend and user) are tested.
At the end all the users are shown and user1 is no longer there.

<a id="questions-section"></a>
## Questions
If you have any doubts, please contact me...
######
This is my GitHub profile
######
[GitHub](https://github.com/FuBootCamp)

######
This is my email address
buzonplataforma12@gmail.com
######

####
<a id="license-section"></a>
#### License information
The MIT License
                                THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
                                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                                IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                                DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                                A RISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                                DEALINGS IN THE SOFTWARE
