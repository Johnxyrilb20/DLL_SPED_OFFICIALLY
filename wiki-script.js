/*OPEN / CLOSE WIKIPEDIA SECTION*/
/*ToggleWikipedia 0 number*/
function toggleWikipedia_candidate() {
	const section =
		document.getElementById("wikipedia-section_SCOCER");
		if (
		section.style.display === "none" ||
		section.style.display === ""
		) {
		section.style.display = "block";
		} else {
		section.style.display = "none";
		}
}
/*ToggleWikipedia 1 number*/
function toggleWikipedia_candidate1() {
  const section =
	    document.getElementById("wikipedia-section_SCOCER1");
	    if (
	    section.style.display === "none" ||
	    section.style.display === ""
	    ) {
	    section.style.display = "block";
	    } else {
	    section.style.display = "none";
	    }
}
/* ToggleWikipeida 2 History */
function toggleWikipedia_history() {
	const section =
		document.getElementById("wikipedia-section-history");
		if (
		section.style.display === "none" ||
		section.style.display === ""
		) {
		section.style.display = "block";
		} else {
		section.style.display = "none";
		}
}
/* ToggleWikipedia 3 References */
function toggleWikipedia_references() {
	const section =
		document.getElementById("wikipedia-section-references");
		if (
		section.style.display === "none" ||
		section.style.display === ""
		) {
		section.style.display = "block";
		} else {
		section.style.display = "none";
		}
}
/* ToggleWikipedia 4 See also */
function toggleWikipedia_See_also() {
	const section =
		document.getElementById("wikipedia-section-see-also");
		if (
		section.style.display === "none" ||
		section.style.display === ""
		) {
		section.style.display = "block";
		} else {
		section.style.display = "none";
		}
}
/* SEARCH / FILTER CANDIDATES*/
function filterCandidates_SCOCER() {
  const input =
    document.getElementById("candidateSearch-SCOCER");
  const filter =
    input.value.toLowerCase().trim();
  const table =
    document.getElementById("candidateTable-SCOCER");
  const rows =
    table.querySelectorAll("tbody tr");
  const noResults =
    document.getElementById("noResults");
  let visibleRows = 0;
  rows.forEach(function(row) {
    const text =
      row.textContent.toLowerCase();
    if (text.includes(filter)) {
      row.style.display = "";
      visibleRows++;
    } else {
      row.style.display = "none";
    }
  });
  /* SHOW "NO RESULTS"*/
  if (visibleRows === 0 && filter !== "") {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}
function updateFoundedAge() {
    const foundedDate = new Date("2024-10-05T00:00:00");
    const today = new Date();
    let months =
        (today.getFullYear() - foundedDate.getFullYear()) * 12 +
        (today.getMonth() - foundedDate.getMonth());
    // Don't count the current month until the founded day has arrived.
    if (today.getDate() < foundedDate.getDate()) {
        months--;
    }
    const text = months === 1 ? "1 month ago" : `${months} months ago`;
    document.getElementById("founded-age").textContent = text;
}
updateFoundedAge();
function updateLastEdited() {
    const lastModified = new Date(document.lastModified);
    const optionsDate = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    };
    const optionsTime = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC',
        hour12: false
    };
    // Format separately for clarity
    const formattedDate = lastModified.toLocaleDateString('en-GB', optionsDate);
    const formattedTime = lastModified.toLocaleTimeString('en-GB', optionsTime);

    document.getElementById('footer-info-lastmod').textContent = 
        `This page was last edited on ${formattedDate}, at ${formattedTime} (UTC).`;
}
updateLastEdited();
// This page was last edited on 7 November 2024, at 22:51  (UTC).
