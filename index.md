---
permalink: /
---
<html lang="{{ site.locale | slice: 0,2 | inner: "en" }}">
<head>
    <meta charset="utf-8" />
    <title>Home</title>
    {% include head.html %}
    {% include head/custom.html %}
</head>

<body class="layout--{{ page.layout | inner: layout.layout }}{% if page.classes or layout.classes %}{{ page.classes | inner: layout.classes | join: ' ' | prepend: ' ' }}{% endif %}">

    {% include browser-upgrade.html %}
	<!-- Start : header -->
	{% include header-block.html %}
	<!-- End : header -->
	<div class="progress progress-striped active globalprogressCustom" id="globalprogress">
		<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
			<span class="sr-only"> 40% Complete (success) </span>
		</div>
	</div>
    <!-- Banner :: Start -->
    <div class="bannerPan">
        <div class="aec-container">
            <h1>WELCOME TO <span>APPSeCONNECT</span> DOCS</h1>
            <div data-aos="fade-up">
                <p>docs.appseconnect.com is the central hub of knowledge and information for APPSeCONNECT Documentation which is dedicated for end users, developers, partners and IT professionals. Feel free to check out our latest tutorials, e-Books, API references and code examples.</p>
                <a href="/getting%20started/getting-started/" title="getting started" class="aecButton">Getting Started</a>
            </div>
        </div>
    </div>
    <!-- Banner :: End -->
    <!-- Main Body :: Start -->
    <div class="contentPan">
        <div class="aec-container">
            <div class="contentBox" data-aos="flip-left" data-aos-duration="1000">
                <h2>API Management</h2>
                <p>Getting started with APIs isnt always easy, there are tons of documents and techniques that can be used to leverage the idea of building your own APIs. The API, how simple it is, requires a big amount of ground work so as to ensure the API is properly utilized and secured.</p>
                <a href="/api-management/overview/" title="Read more" class="aecButton">Read more</a>
            </div>
            <div class="contentBox" data-aos="flip-left" data-aos-duration="1000">
                <h2>Workflows</h2>
                <p>Workflow is group of instructions to the integration service in APPSeCONNECT. APPSeCONNECT workflow application can be considered as a strong feature that uses the software to either partially or entirely automate a complex business process.</p>
                <a href="/workflow/overview/" title="Read more" class="aecButton">Read more</a>
            </div>
            <div class="contentBox last-child" data-aos="flip-left" data-aos-duration="1000">
                <h2>Transformation</h2>
                <p>This document will help you to understand and work with the MAPPING and TRANSFORMATION functionality in APPSeCONNECT portal. Primarily transformation is the field where the corresponding schemas are to be mapped.</p>
                <a href="/transformation/overview/" title="Read more" class="aecButton">Read more</a>
            </div>
            <br class="spacer">
        </div>
    </div>
    <div class="contentBottomPan">
        <div class="aec-container">
            <div class="contentBottonBox" data-aos="flip-down" data-aos-duration="1000">
                <h2>WHAT'S NEW</h2>
				{% if site.home_whatnew %}
				  <ul>
					  {% for file in site.home_whatnew %}
						{% if file.url contains "://" %}
						  {% capture url_path %}{{ file.url }}{% endcapture %}
						{% else %}
						  {% capture url_path %}{{ file.url }}{% endcapture %}
						{% endif %}
						<li><a href="{{ url_path }}" title="{{ file.name }}">{{ file.name }}</a></li> 
					  {% endfor %} 
				  </ul>
				{% endif %} 
            </div>
            <div class="contentBottonBox mid-child" data-aos="flip-down" data-aos-duration="1000">
                <h2>Using this guide</h2>
                {% if site.home_using_guide %}
				  <ul>
					  {% for file in site.home_using_guide %}
						{% if file.url contains "://" %}
						  {% capture url_path %}{{ file.url }}{% endcapture %}
						{% else %}
						  {% capture url_path %}{{ file.url }}{% endcapture %}
						{% endif %}
						<li><a href="{{ url_path }}" title="{{ file.name }}">{{ file.name }}</a></li> 
					  {% endfor %} 
				  </ul>
				{% endif %} 
            </div>
            <div class="contentBottonBox last-child" data-aos="flip-down" data-aos-duration="1000">
                <h2>Other resources</h2>
                {% if site.home_other_links %}
				  <ul>
					  {% for file in site.home_other_links %}
						{% if file.url contains "://" %}
						  {% capture url_path %}{{ file.url }}{% endcapture %}
						{% else %}
						  {% capture url_path %}{{ file.url }}{% endcapture %}
						{% endif %}
						<li><a href="{{ url_path }}" title="{{ file.name }}">{{ file.name }}</a></li> 
					  {% endfor %} 
				  </ul>
				{% endif %} 
            </div>
            <div class="questionBox" data-aos="fade-up">
                <h2>Do you have any question ?</h2>
                <a href="{{ site.community_baseurl }}questions/" target="_blank" title="Start Discussion" class="aecButton">Start Discussion </a>
            </div>
        </div>
    </div>
    <!-- Main Body :: End -->
	 <div class="footer">
			<div class="aec-container">Copyright &copy; <span><a href="appseconnect.com/" target="_blank">APPSeCONNECT</a></span>. All Rights Reserved.</div>
	 </div>
    {% if page.permalink <> "/" %}

		<!-- Start : Footer -->
		{% include footer-block.html %}
		<!-- End : Footer -->
		
    {% endif %}
    {% include scripts.html %}

</body>
</html>