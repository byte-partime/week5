## Flask & Templates: VideoToYou

You have been hired by a startup that is launching a new eCommerce 
platform, VideoToYou. Their brilliant idea is to sell both 
television sets and a streaming video service. Vertical integration!

You need to use Flask and jinja2 templating (including blocks and inheritance) 
to build a prototype of the platform.

#### The specifications are:

* There are three kinds of users: Administrators, customers, and 
warehouse employees
* There are two types of product for sale: Television Sets and Video
* All products have
** name
** price
** a preview image
** a description
** dimensions and weight (for a television)
** duration (for a video)
* There should be a main page that lists the products that are for
sale, linking to specific product pages
* The product pages for television sets and videos should have
different layouts including purchase links
* Purchasing a video adds the video to a user's video library
* The video library should have its own page
* Purchasing a television takes the user to an order page where they
enter an address. This creates an invoice.
* A user should be able to see their order history, where they can
see invoiced items and whether or not they have shipped.
* An administrator should have the ability to create, update, and delete
products, including the ability to upload preview images that are stored
on the server
* A warehouse employee should be able to see a view of invoices and mark
them as shipped.


- The site should have a unified design, but have different interfaces
for the three kinds of users