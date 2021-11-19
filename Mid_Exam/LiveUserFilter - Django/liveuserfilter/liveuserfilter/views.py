from django.shortcuts import render

def livefilter(request):
    return render(request, 'index.html')