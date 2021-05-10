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
	{% if site.home_banners %}
		<div class="contentPan">
			<div class="aec-container">
				{% for file in site.home_banners %} 
					<div class="contentBox" data-aos="flip-left" data-aos-duration="1000">
						<h2>{{file.name}}</h2>
						<p>{{ file.excerpt | markdownify | strip_html | truncate: 160 }}</p>
						<a href="{{ file.url }}" title="Read more" class="aecButton">Read more</a>
					</div>
				{% endfor %} 
				<br class="spacer">
			</div>
		</div>
	{% endif %} 
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
			<div class="copyrights"><a href="https://www.appseconnect.com/" title="APPSeCONNECT" target="_blank">APPSeCONNECT</a> is a product by InSync<br>&copy; 2021 <a href="https://insync.co.in/" title="InSync Tech-Fin Solutions Ltd" target="_blank">InSync Tech-Fin Solutions Ltd</a>. All rights reserved.</div>
	 </div>
    {% if page.permalink <> "/" %}

		<!-- Start : Footer -->
		{% include footer-block.html %}
		<!-- End : Footer -->
		
    {% endif %}
    {% include scripts.html %}

</body>
</html>