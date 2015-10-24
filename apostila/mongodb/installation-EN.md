## Installation

Install MongoDb is easier than pee lying down. LOL

![pee lying](https://cldup.com/N1L5PkCDOq-3000x3000.jpeg)

Firstly go to download page [https://www.mongodb.org/downloads#production](https://www.mongodb.org/downloads#production) and choose your Operational System.
then you just need to unpack and run.

### Linux

![Meme do Linux](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/meme-linux.jpg)
Who uses Linux like ubuntu, can install by `apt-get` following these steps, first of all ,  ensure authenticity and consitency of the MongoDb packages

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
```

Then you should create a files list to MongoDB, in Ubuntu 12:

```
echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
```

Ubuntu 14:

```
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
```

Ubuntu 15:

```
echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list"
```

If you use RedHat or CentOS follow these steps: [http://docs.mongodb.org/manual/tutorial/install-mongodb-on-red-hat/](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-red-hat/)

### Mac

![Meme do Mac](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/meme-mac.jpg)

Who uses Mac can install via [brew](http://brew.sh/) . To install **brew** is easy. 
simply run this command in the terminal:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```



### Windows

![Meme do Mac](https://github.com/Webschool-io/be-mean-instagram/raw/master/apostila/mongodb/images/meme-windows.jpg)

It is very simple on windows, one of my pupils wrote this article that can help you [https://pablojuancruz.wordpress.com/2014/09/03/configurando-ambiente-mongodb-no-windows/](https://pablojuancruz.wordpress.com/2014/09/03/configurando-ambiente-mongodb-no-windows/).

## MongoDB Server

If you didn't have installed it by `apt-get` or `brew` you'll have to execute it directly from where it was unpacked, so preferably unpack it in a folder named `mongodb` in the root, it can be `/` or `C:\`.

If you are using Windows, please use `PowerShell`. Go to **Execute** and type  `PowerShell`, it runs  **Linux** commands on Windows and is better than `Console`.

After entering the folder you'll have just to run the binary `mongod` which is our **server**:

```
./mongod
```

or on `PowerShell`:

```
.\mongod
```

If it display an error about `dbpath` it is  **very simple** to solve. simply create a folder on the root C:\, named `data` and inside of it , create the `db` folder. If you use Linux/Mac don't forget to give the right permissions, if you want to give all permissions just run the command below :

```
sudo chmod 777 -R /data
```

**ps: *please , never do it in production !***

Probably it will have no more problem.

## MongoDB Client

After using MongoDB we need run its client to interact with it by command line. to do it just run `mongo` command on your command line:

```
mongo
```

So it will connect to a *database* called `test`. To you execute the client directly in a specific *database* , just pass its name after the command:

```
mongo be-mean-instagram
```

in this case we have already entered the *database* `be-mean-instagram` that will be the used database in our *workshop*.

## Version

To you ensure the version 3 is installed just run the command below:

```
mongod --version
db version v3.0.6
```
 On client:

```
mongo --version
MongoDB shell version: 3.0.6
```

Now we are ready to start.
