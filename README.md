# es-planet-sprites

This repository is to host a project for creating additional planet sprites for [Endless Sky](https://endless-sky.github.io/).

## Contributing
If this is your first time contributing to a project on github, review [how to fork a repository](https://help.github.com/articles/fork-a-repo/), [creating branches](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/), and [submitting a pull request](https://help.github.com/articles/about-pull-requests/).

Since we're going to be creating variants for the existing planets, they will need to be identical in size to the original, and follow a specific naming pattern. By creating an [issue](https://help.github.com/articles/about-issues/) with your proposed sprites containing an attached .zip of the sprites, we can review them before a pull request and avoid someone having to rename/resize all their sprites because of name conflicts between collaborators.

To find out which sprites are already done check the [catalog page](https://comnom.github.io/es-planet-sprites/). To find out which are pending check the [issues page](https://github.com/comnom/es-planet-sprites/issues).

## License Guidelines
* Since this project will be targeting an free/open source game, all sprites should be released under a [Creative Commons](https://creativecommons.org/licenses/) license, or into the public domain.
* Any source images used to create the sprites must be properly attributed where required.
* A pull request must include an entry in the copyright file following the appropriate format.

## Art Guidelines
* Please review the guide on [creating planet sprites](https://github.com/endless-sky/endless-sky/wiki/PlanetSprites).
* In particular, the shadows should match very closely, the atmospheres should be subtle, and colors should be lightly saturated.
* When resizing the image to the scale of the planet it's replacing, don't forget that cropping will affect the apparent size of the planet.
* A pull request should include both the normal sized, and 2x versions of the sprites.

## Naming Guideline
A sprite should contain the full name of the sprite it's based on, with a "b-uniqueIdentifier" appended to it. ex. desert0.png gets replaced with desert0b-fwg.png. The "b" tells us it's a variant, and the "-fwg" is used in the copyright file for attribution.
