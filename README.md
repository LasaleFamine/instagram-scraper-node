# instagram-scraper-node

> Wrapper interface in NodeJs of the Python [instagram-scraper](https://github.com/rarcega/instagram-scraper). Using [nopy](https://www.npmjs.com/package/nopy).


## Install

```
$ yarn add instagram-scraper-node
```


## Usage

```js
const instagramScraper = require('instagram-scraper-node');

const argv = ['awesomeUsername']; // or ['--tag', 'awesomeHashTag'] or something else

instagramScraper(argv)
	.then(res => console.log(res))
	.catch(err => console.log(err))
```

## API

### instagramScraper([options])

#### options
Type: `array`<br>

Argv array for run the Python `instagram-scraper`.


## CLI

```
$ yarn add global instagram-scraper-node
```

```
$ instagram-scraper-node --help

  Usage
	  $ instagram-scraper-node [input]

	Options
		--help -h           Show help message and exit.

		--login-user  -u    Instagram login user.

		--login-pass  -p    Instagram login password.

		--filename    -f    Path to a file containing a list of users to scrape.

		--destination -d    Specify the download destination. By default, media will be downloaded to <current working directory>/<username>.

		--retain-username -n  Creates a username subdirectory when the destination flag is set.

		--media-types -t    Specify media types to scrape. Enter as space separated values. Valid values are image, video, story, or none. Stories require a --login-user and --login-pass to be defined.

		--latest            Scrape only new media since the last scrape. Uses the last modified time of the latest media item in the destination directory to compare.

		--quiet       -q    Be quiet while scraping.

		--maximum     -m    Maximum number of items to scrape.

		--media-metadata    Saves the media metadata associated with the user's posts to <destination>/<username>.json. Can be combined with --media-types none to only fetch the metadata without downloading the media.

		--include-location  Includes location metadata when saving media metadata. Implicitly includes --media-metadata.

		--comments          Saves the comment metadata associated with the posts to <destination>/<username>.json. Implicitly includes --media-metadata.

		--tag               Scrapes the specified hashtag for media.

		--filter            Scrapes the specified hashtag within a user's media.

		--location          Scrapes the specified instagram location-id for media.

		--search-location   Search for a location by name. Useful for determining the location-id of a specific place.

	Examples
		$ instagram-scraper-node <username>
		$ instagram-scraper-node --tag <hashtag-without-hash>
```


## License

MIT © [LasaleFamine](https://godev.space)
