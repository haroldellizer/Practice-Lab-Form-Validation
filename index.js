function validateForm(){

    let a = document.forms['RegForm']['selectType'];
    let b = document.forms['RegForm']['eventTitle'];
    let c = document.forms['RegForm']['dateOne'];
    let d = document.forms['RegForm']['dateTwo'];
    let e = document.forms['RegForm']['postingDate'];
    let f = document.forms['RegForm']['check1'];
    let g = document.forms['RegForm']['check2'];
    let h = document.forms['RegForm']['check3'];
    let i = document.forms['RegForm']['check4'];
    let j = document.forms['RegForm']['check5'];
    
    if (a.selectedIndex < 1)                  
    { 
        alert("Enter Event Type"); 
        a.focus(); 
        return false; 
    } 
    if (b.value == "")                                  
    { 
        window.alert("Enter Event Title"); 
        b.focus(); 
        return false; 
    } 
   
    if (c.value == "")                               
    { 
        window.alert("Enter Start of Event Day"); 
        c.focus(); 
        return false; 
    } 
       
    if (d.value == "")                                   
    { 
        window.alert("Enter End of Event Day"); 
        d.focus(); 
        return false; 
    } 
   
    if (e.value == "")                           
    { 
        window.alert("Enter Posting Date"); 
        f.focus(); 
        return false; 
    }  
   
    return true; 
}