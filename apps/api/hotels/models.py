from django.db import models

# Create your models here.
class TestModel(models.Model):
  name = models.CharField(max_length=100)
  description = models.TextField()
  price = models.DecimalField(max_digits=10, decimal_places=2)
  available = models.BooleanField(default=True)
  created_at = models.DateTimeField(auto_now_add=True)


  class Meta:
    db_table = 'test_model'