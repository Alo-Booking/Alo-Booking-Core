from rest_framework.routers import DefaultRouter
from hotels.views import TestViewSet

router = DefaultRouter()
router.register('hotels', TestViewSet)
router.register('test', TestViewSet, basename='test')
urlpatterns = router.urls
