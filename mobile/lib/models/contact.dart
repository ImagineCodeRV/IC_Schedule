class Contact {
  final String id;
  final String name;
  final List<String> phones;
  final String address;
  final String category;
  final String type;
  final String status;
  final String notes;

  Contact({
    required this.id,
    required this.name,
    required this.phones,
    required this.address,
    required this.category,
    required this.type,
    required this.status,
    required this.notes,
    required bool isActive,
  });

  factory Contact.fromJson(Map<String, dynamic> json) {
    return Contact(
      id: json['id'],
      name: json['name'],
      phones: List<String>.from(json['phones']),
      address: json['address'],
      category: json['category'],
      type: json['type'],
      status: json['status'],
      notes: json['notes'],
      isActive: false,
    );
  }
}
