function skillsMember() {
    var member = document.getElementById('member');
    if (member) {
        var member = member.innerHTML;
        if (member) {
            var member = JSON.parse(member);
            var member = member.skills;
            var member = JSON.parse(member);
            var member = member.skills;
            var member = member.split(',');
            member = member.filter(Boolean);
            var member = member.map(function (member) {
                return member.trim();
            });
            var member = member.filter(Boolean);
            if (member.length > 0) {
                var member = member.join(', ');
                document.getElementById('member').innerHTML = member;
            }
        }
    }
}