# LoganTMeyerResume
Hey all, here is my attempt at Forrest Brazeal's #CloudResumeChallenge:

Here are the challenge requirements from his blogpost at: https://forrestbrazeal.com/2020/04/23/the-cloud-resume-challenge/

Resume is at: https://heyitslogan.com/
Resume blog is at: https://heyitslogan.com/journal.html

You are currently at the repo for the static website side and here is a link to my backend repo for the project:https://github.com/MooseEagleShark/Resume-Backend_AWS-SAM

"Now the important conditions:



1.Your resume needs to have the AWS Cloud Practitioner certification on it. This is an introductory certification that orients you on the industry-leading AWS cloud – if you have a more advanced AWS cert, that’s fine but not expected. No cheating: include the validation code on the resume. You can sit this exam online for $100 USD. If that cost is a dealbreaker for you, let me know and I’ll see if I can help. Here are some exam prep resources.

-COMPLETE

2.Your resume needs to be written in HTML. Not a Word doc, not a PDF. Here is an example of what I mean.

-Needs improvement, but need to get CI/CD set up so I can start viewing the output quicker in a website.

3.Your resume needs to be styled with CSS. No worries if you’re not a designer – neither am I. It doesn’t have to be fancy. But we need to see something other than raw HTML when we open the webpage.

-Needs improvement, but need to get CI/CD set up so I can start viewing the output quicker in a website.

4.Your HTML resume should be deployed online as an Amazon S3 static website. Services like Netlify and GitHub Pages are great and I would normally recommend them for personal static site deployments, but they make things a little too abstract for our purposes here. Use S3.

-COMPLETE

5.The S3 website URL should use HTTPS for security. You will need to use Amazon CloudFront to help with this.

-COMPLETE

6.Point a custom DNS domain name to the CloudFront distribution, so your resume can be accessed at something like my-c00l-resume-website.com. You can use Amazon Route 53 or any other DNS provider for this. A domain name usually costs about ten bucks to register.

-COMPLETE

7.Your resume webpage should include a visitor counter that displays how many people have accessed the site. You will need to write a bit of Javascript to make this happen. Here is a helpful tutorial to get you started in the right direction.

-COMPLETE

8.The visitor counter will need to retrieve and update its count in a database somewhere. I suggest you use Amazon’s DynamoDB for this. (Use on-demand pricing for the database and you’ll pay essentially nothing, unless you store or retrieve much more data than this project requires.) Here is a great free course on DynamoDB.

-COMPLETE

9.Do not communicate directly with DynamoDB from your Javascript code. Instead, you will need to create an API that accepts requests from your web app and communicates with the database. I suggest using AWS’s API Gateway and Lambda services for this. They will be free or close to free for what we are doing. You will need to write a bit of code in the Lambda function; you could use more Javascript, but it would be better for our purposes to explore Python – a common language used in back-end programs and scripts – and its boto3 library for AWS. Here is a good, free Python tutorial.

-COMPLETE

10.You should also include some tests for your Python code. Here are some resources on writing good Python tests.

-COMPLETE

11.You should not be configuring your API resources – the DynamoDB table, the API Gateway, the Lambda function – manually, by clicking around in the AWS console. Instead, define them in an AWS Serverless Application Model (SAM) template and deploy them using the AWS SAM CLI. This is called “infrastructure as code” or IaC. It saves you time in the long run.

-COMPLETE

12.You do not want to be updating either your back-end API or your front-end website by making calls from your laptop, though. You want them to update automatically whenever you make a change to the code. (This is called continuous integration and deployment, or CI/CD.) Create a private GitHub repository for your backend code. Set up GitHub Actions such that when you push an update to your Serverless Application Model template or Python code, your Python tests get run. If the tests pass, the SAM application should get packaged and deployed to AWS.

-COMPLETE

13.Create a second private GitHub repository for your website code. Create GitHub Actions such that when you push new website code, the S3 bucket automatically gets updated. (You may need to invalidate your CloudFront cache in the code as well.) Important note: DO NOT commit AWS credentials to source control! Bad hats will find them and use them against you!

-COMPLETE

14.Finally, in the text of your resume, you should link a short blog post describing some things you learned while working on this project. Dev.to is a great place to publish if you don’t have your own blog.
"

-COMPLETE
